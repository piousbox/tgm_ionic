import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';

import { 
  LoadingController, MenuController, ModalController,
  Platform, ToastController
} from '@ionic/angular';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';

import { GetStars } from './GetStars';
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
  ccNumber;
  ccExpMonth;
  ccExpYear;
  ccCvc;
  collapseDirection:string = 'right'; // 'left' or 'right'
  currentUser:any = {};
  currentUserStr:string = "";
  footerCollapsed:boolean = false;
  halfCollapsed:string = "none-collapsed"; // 'none-collapsed', 'left-collapsed', 'right-collapsed'
  headerCollapsed:boolean = true;
  location:any = false;
  location_slug:string = '';
  map:any = false;
  map_slug:string = '';
  marker_slug:string = '';
  markers:any = [];
  newsitems:Array<any> = [];
  nStars:number = 0;
  zoomFactor = 1.0;

  constructor(
    private appService: AppService,
    private httpClient: HttpClient,
    private loadingController: LoadingController,    
    private menu: MenuController,
    private modalController: ModalController,
    private nativeStorage: NativeStorage,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private stripe: Stripe,
    private toastController: ToastController,
  ) {
    logg('MapPage constructor()');

    this.setCurrentUser();
    this.appRouter = AppRouter;

    this.appService.nStars.subscribe(n => {
      logg(n, 'observed nstars');
      this.nStars = parseInt(n);
    });

    this.platform.ready().then(() => {
      this.stripe.setPublishableKey(environment.stripePublishableKey);
      this.getStars();

      this.map_slug      = this.route.snapshot.paramMap.get('map_slug') || C.worldMapSlug;
      this.location_slug = this.route.snapshot.paramMap.get('location_slug') || '';

      this.ngOnInit();
    });
  }

  collapseFooter() {
    this.footerCollapsed = this.footerCollapsed ? false : true;
  }

  collapseHeader() {
    this.headerCollapsed = this.headerCollapsed ? false : true;
  }

  collapseLeft() {
    if ('none-collapsed' == this.halfCollapsed) {
      this.halfCollapsed = 'left-collapsed';
      this.collapseDirection = 'right';
    } else {
      this.halfCollapsed = 'none-collapsed';
      this.collapseDirection = 'left';
    }
  }
  collapseMain() {
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
  collapseRight() {
    if ('none-collapsed' == this.halfCollapsed) {
      this.halfCollapsed = 'right-collapsed';
      this.collapseDirection = 'left';
    } else {
      this.halfCollapsed = 'none-collapsed';
      this.collapseDirection = 'right';
    }
  }

  async getStars() {
    logg('MapPage getStars()')
    const cu = await this.nativeStorage.getItem('current_user').then(a=>JSON.parse(a));
    const params = new HttpParams().set('accessToken', cu.longTermToken);
    const account = await this.httpClient.get(ApiRouter.account, { params: params }).toPromise();
    this.nStars = account['n_stars'];
    // logg(account, 'account');
    // this.nStars = answer
  }

  navigate(where) {
    this.router.navigate([where]);
  }
  navigateToLocation(map_slug, location_slug) {
    this.marker_slug = location_slug;
    this.map_slug    = map_slug;
    this.router.navigate([`/maps/${map_slug}/locations/${location_slug}`]);
    this.ngOnInit();
  }
  navigateToLocation2(ms, m2s, tt) {
    // logg([ms, m2s, tt], "navigateToLocation2()");

    if (C.item_type_location == tt) { 
      this.navigateToLocation(ms, m2s);
    } else if (C.item_type_map == tt) { 
      this.navigateToMap(m2s);
    }
  }
  navigateToMap(slug = 'map-world') {
    this.router.navigate([`/maps/${slug}`]);
  }

  async ngOnInit () {
    // logg([this.map_slug], 'MapPage ngOnInit()');

    if (this.map_slug) {
      const path = ApiRouter.map(this.map_slug);
      const mapp = await this.httpClient.get(path).toPromise();
      this.map = mapp['map'];
    }
    if (this.marker_slug) {
      this.location = await this.httpClient.get(ApiRouter.marker(this.marker_slug)).toPromise();
      logg(this.location, 'location!');
    }
  }

  setCurrentUser() {
    logg('MapPage setCurrentUser()');

    this.nativeStorage.getItem('current_user').then(u => JSON.parse(u)).then(data => {
      this.currentUser = data;
      // this.currentUserStr = JSON.stringify(Object.keys(data).map( k => `${k}::${data[k].toString().substring(0,10)}` ));
    }).catch( e => {
      this.currentUser    = false;
      this.currentUserStr = "";
      console.log('+++ currentUser() error:', e);
    });
  }


  async showGetStars() {
    const modal = await this.modalController.create({
      component: GetStars,
    });
    return await modal.present();
  }

  zoomIn() {
    this.zoomFactor = this.zoomFactor * 2;
  }

  zoomOut() {
    this.zoomFactor = this.zoomFactor/2;
  }

}
