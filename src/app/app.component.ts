import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppRouter } from './app-router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  user: any = {};
  userReady: boolean = false;
  newsitems: any = [];
  env: any = {};
  currentUser: any = null;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private router: Router,
    private menu: MenuController,
    private fb: Facebook,
    public loadingController: LoadingController,
    public httpClient: HttpClient, 

  ) {
    this.initializeApp();
    this.env = environment;


  }

  navigate(where) {
    this.router.navigate([where]);
  }

  async ngOnInit() {    
    /* const loading = await this.loadingController.create({
      message: 'Please wait 2...'
    });
    await loading.present(); */

    this.platform.ready().then(() => {
      this.nativeStorage.getItem('current_user').then(data => {
        this.currentUser = data;
        console.log('+++ got current user!', data);

        if ('facebook' == data.type) {
          const params = new HttpParams().set('accessToken', data.accessToken)
          const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
          answer.subscribe(data => {
            console.log('+++ from m3: ', data);
            
            if (data['newsitems']) {
              this.newsitems = data['newsitems'];
            }
          }, error => {
            console.log('+++ error from m3:', error)
          })
        }
      });
    });
  }

  doFacebookLogout () {
    console.log('+++ logging out facebook...');

    this.nativeStorage.remove('facebook_user');
    this.nativeStorage.remove('google_user');
    this.nativeStorage.remove('current_user');
    this.nativeStorage.clear();

    this.fb.logout();
  }

  doFacebookLogin () {
    this.fb.login(['public_profile', 'user_friends', 'email']
    ).then((res: any) => { // res: FacebookLoginResponse      
      const r = res.authResponse
      console.log('+++ Logged into Facebook!', r)
      this.nativeStorage.setItem('current_user', {
        accessToken: r.accessToken,
        signedRequest: r.signedRequest,
        userID: r.userID,
        type: 'facebook',
      }).then(() => {
        this.router.navigate([ AppRouter.rootPath ])
      }, (error) => {
        console.log('+++ error:', error)
      })
    }).catch(e => console.log('Error logging into Facebook', e));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.nativeStorage.getItem('current_user').then( data => {
        this.router.navigate([ AppRouter.rootPath ]);
        this.splashScreen.hide();
      }, err => {
        this.router.navigate([ AppRouter.loginPath ]);
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    });
  }
}
