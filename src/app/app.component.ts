import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { MenuController, ToastController, } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppRouter } from './app-router';
import { AppService } from './app-service';
import { C, logg } from './const';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./mainfold.scss', './inventory.scss', './map.scss'],
})
export class AppComponent implements OnInit {
  footerCollapsed:boolean = false;
  halfCollapsed:string = "none"; // 'none', 'left', 'right'
  collapseDirection:string = 'right'; // 'left' or 'right'

  thisMap:object = {};
  zoomFactor = 1.0;
  markers = [];
  markerCo:object = {};

  constructor(
    private appService: AppService,
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
    this.thisMap = { imgClass: 'img-world-1', w: 1200, h: 1200 };
    this.markerCo = { top: 650, left: 210, w: 70, h: 90, img: '../assets/maps/v1/co.png', slug: 'map-colombia' };
  }

  zoomIn() {
    this.zoomFactor = this.zoomFactor * 2;
  }

  zoomOut() {
    this.zoomFactor = this.zoomFactor/2;
  }

  navigateToMap(slug) {
    logg(slug, 'gotoMap()');
    this.router.navigate([`/maps/${slug}`]);
  }

  collapseFooter() {
    this.footerCollapsed = this.footerCollapsed ? false : true;
  }

  collapseMain() {
    if ('left-collapsed' === this.halfCollapsed) {
      this.halfCollapsed = 'none-collapsed';
      this.collapseDirection = 'right';
    } else if ('none-collapsed' === this.halfCollapsed && 'right' === this.collapseDirection) {
      this.halfCollapsed = 'right-collapsed';
      this.collapseDirection = 'left-collapsed';
    } else if ('right-collapsed' === this.halfCollapsed) {
      this.halfCollapsed = 'none-collapsed';
      this.collapseDirection = 'left-collapsed';
    } else if ('none-collapsed' === this.halfCollapsed && 'left' === this.collapseDirection) {
      this.halfCollapsed = 'left-collapsed';
      this.collapseDirection = 'right-collapsed';
    }
  }

  navigate(where) {
    this.ngZone.run(() => {
      this.router.navigate([where]);
    })
  }

  ngOnInit () {
    // logg('AppComponent ngOnInit()');
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
