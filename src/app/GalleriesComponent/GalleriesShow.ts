import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'galleries-show',
  templateUrl: 'GalleriesShow.html',
  styleUrls: [],
})
export class GalleriesShow implements OnInit {
  gallery:any = false;
  @Input() slug:string;

  constructor(
    private appService: AppService,
    private httpClient: HttpClient,
    private modalController: ModalController,
    private nativeStorage: NativeStorage,
  ) {
    if (this.slug) {
      this.ngOnInit();
    }
  }

  async ngOnInit() {
    logg(this.slug, 'GalleriesShow ngOnInit() slug');
    if (this.slug) {
      let params = await this.nativeStorage.getItem('current_user').then(r => JSON.parse(r)
        ).then( cu => {
          return new HttpParams().set('accessToken', cu.longTermToken);
        }).catch( e => {
          return {};
        });
      const answer = await this.httpClient.get(ApiRouter.galleriesShow(this.slug), { params: params }).toPromise();
      this.gallery = answer['gallery'];
    }
  }

  async purchase() {
    let params = await this.nativeStorage.getItem('current_user').then(r => JSON.parse(r)
      ).then( cu => {
        return new HttpParams().set('accessToken', cu.longTermToken
          ).set('className', 'Gallery').set('slug', this.slug);
      }).catch( e => {
        throw 'this cannot happen';
        return {};
      });
    const answer = await this.httpClient.post(ApiRouter.doPurchase, params ).toPromise();
    logg(answer, 'a12 - answer');
  }

  
}
