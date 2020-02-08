import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { MenuController, ToastController, } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';

import { environment } from '../../environments/environment';
import { AppRoutingModule } from '../app-routing.module';
import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { C, logg } from '../const';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['./mainfold.scss', './inventory.scss', './map.scss'],
})
export class MapPage implements OnInit {
  appRouter:any;
  cc_number = false;
  collapseDirection:string = 'right'; // 'left' or 'right'
  currentUser:any = {};
  currentUserStr:string = "";
  footerCollapsed:boolean = false;
  halfCollapsed:string = "none-collapsed"; // 'none-collapsed', 'left-collapsed', 'right-collapsed'
  headerCollapsed:boolean = true;
  stripe;

  maps:object = {
    'map-world': { w: 1200, h: 1200, description: 'World', img: '../assets/maps/1200x1200/world-1.jpg',
      markers: [ 
        { top: 650, left: 210, w: 70, h: 90, img: '../assets/maps/v1/co.png', slug: 'map-colombia' }, 
        { top: 475, left: 184, w: 64, h: 64, img: '../assets/64x64/marker-city.png', slug: 'map-chicago' },
      ] },
    'map-colombia': { w: 500, h: 600, description: 'Colombia', img: '../assets/maps/500x600_colombia.png' },
    'map-chicago': { w: 630, h: 472, description: 'Chicago', img: '../assets/src/chicago.jpg' },
  };
  thisMap:object = {};
  zoomFactor = 1.0;
  markers = [];
  markerCo:object = {};

  constructor(
    private appService: AppService,
    // private fb: Facebook,
    private httpClient: HttpClient,
    private loadingController: LoadingController,    
    private menu: MenuController,
    private nativeStorage: NativeStorage,
    private ngZone: NgZone,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private stripe: Stripe,
    private toastController: ToastController,
  ) {
    let slug = this.route.snapshot.paramMap.get('slug') || 'map-world';
    this.thisMap = this.maps[slug];
    this.markers = this.thisMap['markers'];
    this.setCurrentUser();
    this.appRouter = AppRouter;
    this.stripe.setPublishableKey(environment.stripePublishableKey);
  }

  collapseFooter() {
    this.footerCollapsed = this.footerCollapsed ? false : true;
  }

  collapseHeader() {
    this.headerCollapsed = this.headerCollapsed ? false : true;
  }

  collapseMain() {
    logg('collapseMain()');

    if ('left-collapsed' === this.halfCollapsed) {
      this.halfCollapsed = 'none-collapsed';
      this.collapseDirection = 'right';
    } else if ('none-collapsed' === this.halfCollapsed && 'right' === this.collapseDirection) {
      this.halfCollapsed = 'right-collapsed';
      this.collapseDirection = 'left';
    } else if ('right-collapsed' === this.halfCollapsed) {
      this.halfCollapsed = 'none-collapsed';
      this.collapseDirection = 'left';
    } else if ('none-collapsed' === this.halfCollapsed && 'left' === this.collapseDirection) {
      this.halfCollapsed = 'left-collapsed';
      this.collapseDirection = 'right';
    }
  }

  navigate(where) {
    this.router.navigate([where]);
  }

  navigateToMap(slug = 'map-world') {
    this.router.navigate([`/maps/${slug}`]);
    this.thisMap = this.maps[slug];
    this.markers = this.thisMap['markers'];
  }

  ngOnInit () {}

  payMini() {
    logg(this.cc_number, 'cc_number')
    let card = {
      number: this.cc_number,
      expMonth: 12,
      expYear: 2020,
      cvc: '220'
    }
    this.stripe.createCardToken(card)
      .then(token => console.log(token.id))
      .catch(error => console.error(error));
  }

  setCurrentUser() {
    this.nativeStorage.getItem('current_user').then(u => JSON.parse(u)).then(data => {
      this.currentUser = data;
      // this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));
    }).catch( e => {
      this.currentUser    = false;
      this.currentUserStr = "";
      console.log('+++ currentUser() error:', e);
    });
  }

  zoomIn() {
    this.zoomFactor = this.zoomFactor * 2;
  }

  zoomOut() {
    this.zoomFactor = this.zoomFactor/2;
  }

}
