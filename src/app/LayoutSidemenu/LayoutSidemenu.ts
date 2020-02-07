import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { ApiRouter, AppRouter } from '../app-router';
import { AppService } from '../app-service';
import { C, logg } from '../const';

@Component({
  selector: 'layout-sidemenu',
  templateUrl: 'LayoutSidemenu.html',
  styleUrls: [],
})
export class LayoutSidemenu implements OnInit {
  currentUser:any = false;
  currentUserStr:string = '<none>';
  env:string = '<none>';
  isApp:boolean = true;
  mainFooterVisible:string = '';
  mainTitle:string = '';
  message:string;
  platformList:string = '';
  appRouter:any = null;

  constructor(
    private appService: AppService,
    private fb: Facebook,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
    this.appRouter = AppRouter;

    this.nativeStorage.getItem('current_user').then(r=>JSON.parse(r)).then(async data => {
      logg(data, 'data 6');
      this.currentUser = data;
    }, async error => {
      logg(error, 'error 665 no currentUser');
    });
  }

  async doFacebookLogin () {
    const data = await this.fb.login(['public_profile', 'email']).then(async (res: any) => { // res: FacebookLoginResponse      
      const data = res.authResponse;
      this.currentUser = data;
      this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));
      return data;
    });
    const answer = await this.httpClient.get(ApiRouter.longTermToken({ shortTermToken: data.accessToken })).toPromise();
    const thisCurrentUser = {
      accessToken: data.accessToken,
      longTermToken: answer['long_term_token'],
      userID: data.userID,
      type: 'facebook',
    };
    const thisCurrentUserStr = JSON.stringify(thisCurrentUser);
    this.nativeStorage.setItem('current_user', thisCurrentUserStr).then(async () => {
      logg(thisCurrentUserStr, 'set this guy!');

      const result = await this.nativeStorage.getItem('current_user');
      logg(JSON.parse(result), 'and out result');

      this.appService.changeMessage(C.didLogin);
      this.router.navigate([ AppRouter.rootPath ])
    }, (error) => {
      console.log('+++ error:', error)
    });
  }

  ngOnInit() {}

  navigate(where) {
    if ('string' === typeof where) {
      this.mainTitle = where;
      this.router.navigate([where]);
    } else if ('object' === typeof where) {
      this.mainTitle = where['kind'];
      let here = '';
      switch (where['kind']) {
      case 'report': {
        here = '/reports';
        break;
      } default: {
      } }
      this.router.navigate([here]);
    }
  }

}
