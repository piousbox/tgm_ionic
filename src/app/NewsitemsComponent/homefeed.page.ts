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
  selector: 'homefeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsitems.scss'],
})
export class HomefeedPage implements OnInit {
  newsitems = [];
  hasCalled = false;

  constructor(
    private appService: AppService,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
    // logg('HomefeedPage.constructor()');
    // appService.setTitle('Homefeed!');
    this.ngOnInit();
  }

  async ngOnInit () {
    if (!this.hasCalled) {
      this.hasCalled = true;
      const answer = await this.httpClient.get(ApiRouter.homefeed).toPromise();
      this.newsitems = answer['newsitems'];
    }
  }

}
