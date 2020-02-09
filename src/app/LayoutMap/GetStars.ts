import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ModalController } from '@ionic/angular';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';

import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { C, logg } from '../const';
import { environment } from '../../environments/environment';

@Component({
  selector: 'get-stars',
  templateUrl: 'GetStars.html',
  styleUrls: [ './GetStars.scss' ],
})
export class GetStars {
  ccNumber:string = '4242424242424242';
  ccExpMonth:number = 11;
  ccExpYear:number = 2021;
  ccCvc:string = '212';
  currentUser:any = false;

  newNStars;

  constructor(
    private appService: AppService,
    private httpClient: HttpClient,
    public modalController: ModalController,
    private nativeStorage: NativeStorage,
    private stripe: Stripe,
  ) {
    this.stripe.setPublishableKey(environment.stripePublishableKey);
    this.setCurrentUser();
  }

  close() {
    this.modalController.dismiss();
  }

  payMini() {
    logg(this.ccNumber, 'ccNumber')
    let card = {
      number: this.ccNumber,
      expMonth: this.ccExpMonth,
      expYear: this.ccExpYear,
      cvc: this.ccCvc,
    }
    this.stripe.createCardToken(card).then(async token => {
      console.log(token.id);
      const cu = await this.nativeStorage.getItem('current_user').then(u => JSON.parse(u));
      logg(cu, 'cu');
      const answer = await this.httpClient.post(ApiRouter.getStars, { 
        accessToken: cu.longTermToken, 
        amount: 101,
        stripeToken: token.id,
        kind: C.oneStar,
      }).toPromise();
      logg(answer, 'answer');
      this.newNStars = answer['n_stars'];
      this.appService.setNStars(answer['n_stars']);
    }).catch(error => console.error(error));
  }

  setCurrentUser() {
    this.nativeStorage.getItem('current_user').then(u => JSON.parse(u)).then(data => {
      this.currentUser = data;
    }).catch( e => {
      console.log('+++ currentUser() error:', e);
    });
  }
  
}
