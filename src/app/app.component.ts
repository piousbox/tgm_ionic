import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { MenuController, ToastController, } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ApiRouter, AppRouter } from './app-router';
import { AppService } from './app-service';
import { C, logg } from './const';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ './footer.scss', ],
})
export class AppComponent implements OnInit {
  appRouter;
  currentUser:any = false;
  currentUserStr:string = "";
  
  env: string = '<none>';

  isApp: boolean = true;

  mainTitle: string = '';
  mainFooterVisible: string = '';
  message: string;

  platformList: string = '';

  constructor(
    private appService: AppService,
    private fb: Facebook,
    private menu: MenuController,
    private nativeStorage: NativeStorage,
    private ngZone: NgZone,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController,
  ) {
    this.appRouter = AppRouter;
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

  navigate(where) {
    this.ngZone.run(() => {
      this.router.navigate([where]);
    })
  }

  ngOnInit () {
    // logg('AppComponent ngOnInit()');
  }

  toggleMainFooter () {
    // console.log('+++ toggle main footer');
    this.mainFooterVisible = this.mainFooterVisible == '' ? 'main-footer-visible' : '';
  }

}
