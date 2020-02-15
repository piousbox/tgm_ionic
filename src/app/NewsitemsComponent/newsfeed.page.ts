import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { C, logg } from '../const';

@Component({
  selector: 'newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsitems.scss'],
})
export class NewsfeedPage implements OnInit {
  newsitems = [];

  constructor(
    private appService: AppService,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
    logg('HomefeedPage.constructor()');
    this.ngOnInit();
  }

  async ngOnInit () {
    const answer = await this.httpClient.get(ApiRouter.homefeed).toPromise();
    this.newsitems = answer['newsitems'];
  }

}
