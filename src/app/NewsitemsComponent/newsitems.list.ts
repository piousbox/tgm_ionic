import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { C, logg } from '../const';

@Component({
  selector: 'newsitems-list',
  templateUrl: './newsitems-list.html',
  styleUrls: ['./newsitems.scss'],
})
export class NewsitemsList implements OnInit {
  @Input() newsitems:Array<any> = [];

  constructor(
    private appService: AppService,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
    // logg('NewsitemsList constructor()');
    this.ngOnInit();
  }

  async ngOnInit () {
    // logg('NewsitemsList ngOnInit()');
    // const answer = await this.httpClient.get(ApiRouter.newsfeed, { params: params }).toPromise();
    // this.newsitems = data['newsitems'];
  }

}

