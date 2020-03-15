import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { ToastController, MenuController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { ApiRouter, AppRouter } from '../app-router';
import { AppService } from '../app-service';
import { C, logg } from '../const';

@Component({
  selector: 'layout-fab',
  templateUrl: 'LayoutFab.html',
  styleUrls: [],
})
export class LayoutFab implements OnInit {
  currentUser:any = false;
  currentUserStr:string = '<none>';
  env:string = '<none>';
  isApp:boolean = true;
  mainFooterVisible:string = '';
  mainTitle:string = '';
  message:string;
  platformList:string = '';
  appRouter:any = AppRouter;

  constructor(
    private appService: AppService,
    private fb: Facebook,
    private menu: MenuController,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
    this.ngOnInit();

    this.appService.currentMessage.subscribe(msg => {
      if (msg != C.defaultMessage) {
        this.ngOnInit();
      }
    })
  }

  customOpen() {
    // logg(this.menu.isActive(), 'active?');
    // logg(this.menu.isOpen(), 'open?');
    this.menu.toggle();
    // logg(this.thisMenu.isOpen(), 'open?');
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
    this.nativeStorage.setItem('current_user', JSON.stringify(thisCurrentUser)).then(async () => {
      this.appService.changeMessage(C.didLogin);
      this.appService.setCurrentUser(thisCurrentUser);
      this.router.navigate([ AppRouter.rootPath ]);
    }, (error) => {
      console.log('+++ error:', error)
    });
  }

  ngOnInit() {
    this.nativeStorage.getItem('current_user').then(r=>JSON.parse(r)).then(async data => {
      this.currentUser = data;
    }, async error => {
      this.currentUser = false;
    });
  }

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
