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
    this.ngOnInit();
  }

  async ngOnInit() {
    logg(this.slug, 'GalleriesShow ngOnInit()');
    if (this.slug) {
      const answer = await this.httpClient.get(ApiRouter.galleriesShow(this.slug)).toPromise();
      this.gallery = answer['gallery'];
    }
  }
  
}
