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
  selector: 'galleries-show',
  templateUrl: 'GalleriesShow.html',
  styleUrls: [],
})
export class GalleriesShow implements OnInit {
  slug:string = '';

  constructor(
    private appService: AppService,
    private httpClient: HttpClient,
    private modalController: ModalController,
    private nativeStorage: NativeStorage,
  ) {
    this.ngOnInit();
  }

  ngOnInit() {
    logg('GalleriesShow ngOnInit()');
  }
  
}
