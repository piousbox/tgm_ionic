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
  @Input() newsitems: Array<any> = [];

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

  async ngOnInit() {
    // logg('NewsitemsList ngOnInit()');
    // const answer = await this.httpClient.get(ApiRouter.newsfeed, { params: params }).toPromise();
    // this.newsitems = data['newsitems'];
  }

  async showGallery(slug) {
    logg(slug, 'showGallery()');
    const modal = await this.modalController.create({
      component: GalleriesShow,
      componentProps: { slug: slug },
    });
    return await modal.present();
  }

  getBackgroundStyle(premium) {
    const background = "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url('$url')";
    let style = {};

    switch (premium) {
      case 1:
        style["background-image"] = background.replace("$url", "../../assets/newsfeed/Sunglass-bg-2.png");
        break;
      case 2:
        style["background-image"] = background.replace("$url", "../../assets/newsfeed/Lock Icon.png");
        break;
    }
    return style;
  }

  getIconUrl(isPremium, premiumTier, type) {
    if(!isPremium){
      switch(type){
        case "video":
            return "../../assets/newsfeed/Videos Icon.svg";
        case "report":
            return "../../assets/newsfeed/Reports Icon.png";
        case "gallery":
            return "../../assets/newsfeed/Photos Icon.png";
      }
    }
    if(premiumTier === 1){
      return "../../assets/newsfeed/Sunglass.png";
    }
    if(premiumTier === 2){
      return "../../assets/newsfeed/Gem Premium.png";
    }
  }

}

