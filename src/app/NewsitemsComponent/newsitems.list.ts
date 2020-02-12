import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { 
  LoadingController, MenuController, ModalController,
  Platform, ToastController
} from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { C, logg } from '../const';
import { GalleriesShow } from '../GalleriesComponent/GalleriesShow';

@Component({
  selector: 'newsitems-list',
  templateUrl: './newsitems-list.html',
  styleUrls: ['./newsitems.scss'],
})
export class NewsitemsList implements OnInit {
  @Input() newsitems:Array<any> = [];

  constructor(
    private appService: AppService,
    private modalController: ModalController,
    private nativeStorage: NativeStorage,
    private router: Router,
    private httpClient: HttpClient, 
    private toastController: ToastController,
  ) {
    // logg('NewsitemsList constructor()');
    this.ngOnInit();
  }

  async ngOnInit () {
    // logg('NewsitemsList ngOnInit()');
    // const answer = await this.httpClient.get(ApiRouter.newsfeed, { params: params }).toPromise();
    // this.newsitems = data['newsitems'];
  }

  async showGallery(slug) {
    logg(slug, 'showGallery()');
    const modal = await this.modalController.create({
      component: GalleriesShow,
    });
    return await modal.present();
  }

}

