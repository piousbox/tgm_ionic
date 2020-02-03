import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { MenuController, ToastController, } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { environment } from '../../environments/environment';
import { AppRoutingModule } from '../app-routing.module';
import { AppRouter } from '../app-router';
import { AppService } from '../app-service';
import { C, logg } from '../const';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['../mainfold.scss', '../inventory.scss', '../map.scss'],
})
export class MapPage implements OnInit {
  footerCollapsed:boolean = false;
  halfCollapsed:string = "none"; // 'none', 'left', 'right'
  collapseDirection:string = 'right'; // 'left' or 'right'

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
    private menu: MenuController,
    private nativeStorage: NativeStorage,
    private ngZone: NgZone,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController,
  ) {
    let slug = this.route.snapshot.paramMap.get('slug') || 'map-world';
    this.thisMap = this.maps[slug];
    this.markers = this.thisMap['markers'];

    logg(this.thisMap, 'thisMap 2');
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

    let slug = this.route.snapshot.paramMap.get('slug') || 'map-world';
    this.thisMap = this.maps[slug];
    this.markers = this.thisMap['markers'];
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
    // logg('MapPage ngOnInit()');
  }

  ionViewDidLoad () {
    console.log('+++ map.page ionViewDidLoad');
  }

  ionViewWillEnter () {
    console.log('+++ map.page ionViewWillEnter');
  }

  ionViewDidEnter () {
    console.log('+++ map.page ionViewDidEnter');
  }

}
