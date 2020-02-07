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
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class HomefeedPage implements OnInit {
  newsitems:array = [];

  constructor(
    private appService: AppService,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
    // logg('HomefeedPage.constructor()');
    appService.setTitle('Homefeed!');
    this.render();
  }

  ngOnInit () {}

  async render () {
    const answer = await this.httpClient.get(ApiRouter.homefeed).toPromise();
    logg(answer, 'answer');
    this.newsitems = answer['newsitems'];
  }

}
