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
import { AppRouter } from './app-router';
import { AppService } from './app-service';
import { C, logg } from './const';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  footerCollapsed:boolean = false;
  halfCollapsed:string = "none"; // 'none', 'left', 'right'
  collapseDirection:string = 'right'; // 'left' or 'right'

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
  }

  collapseFooter() {
    this.footerCollapsed = this.footerCollapsed ? false : true;
  }

  collapseMain() {
    if ('left' === this.halfCollapsed) {
      this.halfCollapsed = 'none';
      this.collapseDirection = 'right';
      // $(".mainfold-parent").removeClass('left-collapsed');
    } else if ('none' === this.halfCollapsed && 'right' === this.collapseDirection) {
      this.halfCollapsed = 'right';
      this.collapseDirection = 'left';
      // $(".mainfold-parent").addClass('right-collapsed');
    } else if ('right' === this.halfCollapsed) {
      this.halfCollapsed = 'none';
      this.collapseDirection = 'left';
      // $(".mainfold-parent").removeClass('right-collapsed');
    } else if ('none' === this.halfCollapsed && 'left' === this.collapseDirection) {
      this.halfCollapsed = 'left';
      this.collapseDirection = 'right';
      // $(".mainfold-parent").addClass('left-collapsed');
    }
  }

  navigate(where) {
    this.ngZone.run(() => {
      this.router.navigate([where]);
    })
  }

  initializeApp() {
    /* this.platform.ready().then(() => {
      this.nativeStorage.getItem('current_user').then( data => {
        this.router.navigate([ AppRouter.rootPath ]);
        this.splashScreen.hide();
      }, err => {
        // this.router.navigate([ AppRouter.loginPath ]);
        this.router.navigate([ AppRouter.rootPath ]);
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    }); */
  }

  async doFacebookLogin () {
  }

  async doFacebookLogout () {
  }

  ngOnInit () {
  }

  render () {
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

}
