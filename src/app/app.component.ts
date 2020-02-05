import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { MenuController, Platform, ToastController, } from '@ionic/angular';
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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser: any = null;
  currentUserStr: string = '<none>';

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
    this.render = this.render.bind( this );

    this.initializeApp();
    
    this.mainTitle = this.appService.title;
    this.env = JSON.stringify(environment.name);

    let platforms = this.platform.platforms();
    this.platformList = platforms.join(', ');

    if(platforms.indexOf('mobileweb') != -1) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }

    this.platform.ready().then(() => {
      this.nativeStorage.getItem('current_user').then(a=>JSON.parse(a)).then(data => {
        this.currentUser = data;
        if (data && Object.keys(data).length > 0) {
          this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));
        }
      }, error => {
        console.log('+++ app#constructor doesnt have current_user:', error);
      });
    }); 
  }

  navigate(where) {
    this.ngZone.run(() => {
      console.log('+++ navigating:', where);

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
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.nativeStorage.getItem('current_user').then( data => {
        logg(data, 'no navigating here!');
        // this.router.navigate([ AppRouter.rootPath ]);
        this.splashScreen.hide();
      }, err => {
        logg('Not logged in');
        // this.router.navigate([ AppRouter.rootPath ]);
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
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
    // this.render();
  }

  ngOnInit () {
    this.appService.currentMessage.subscribe(message => this.message = message)
  }

  render () {
    logg('app.component#render');

    this.mainTitle = this.appService.title;

    this.nativeStorage.getItem('current_user').then(data => {
      this.currentUser    = JSON.parse(data);
      this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));
    }, err => { 
      this.currentUser    = null;
      this.currentUserStr = null;
    }).catch( e => console.log('+++ render error:', e));
  }

  ionViewDidLoad () {
    console.log('+++ app.component ionViewDidLoad');
  }

  ionViewWillEnter () {
    console.log('+++ app.component ionViewWillEnter');
  }

  ionViewDidEnter () {
    console.log('+++ app.component ionViewDidEnter');
  }

  toggleMainFooter () {
    // console.log('+++ toggle main footer');
    this.mainFooterVisible = this.mainFooterVisible == '' ? 'main-footer-visible' : '';
  }

}
