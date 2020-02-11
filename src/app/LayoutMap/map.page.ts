import { Component, OnInit, NgZone } from '@angular/core';
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
  map:any = false;
  markers:any = [];
  nStars:number = 0;
  slug:string = '';
  // stripe;
  zoomFactor = 1.0;

  constructor(
    private appService: AppService,
    private httpClient: HttpClient,
    private loadingController: LoadingController,    
    private menu: MenuController,
    public modalController: ModalController,
    private nativeStorage: NativeStorage,
    private ngZone: NgZone,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private stripe: Stripe,
    private toastController: ToastController,
  ) {
    logg('MapPage constructor()');

    // this.setCurrentUser(); // @TODO: re-add
    this.appRouter = AppRouter;

    this.appService.nStars.subscribe(n => {
      logg('observed nstars');
      this.nStars = parseInt(n);
    });

    this.platform.ready().then(() => {
      logg(environment.stripePublishableKey, 'keyy');
      logg(this.stripe, 'OG stripe?');
      
      this.stripe.setPublishableKey(environment.stripePublishableKey);
      // this.getStars();
      this.slug = this.route.snapshot.paramMap.get('slug') || C.worldMapSlug;
      logg(this.slug, 'slugg');

      this.ngOnInit();
    });
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

  async getStars() {
    return false; // @TODO: do proper sequence of events here

    logg('MapPage getStars()')
    // const current_user = await this.nativeStorage.getItem('current_user').then(a=>JSON.parse(a));
    const params = new HttpParams().set('accessToken', this.currentUser.longTermToken);
    const account = await this.httpClient.get(ApiRouter.account, { params: params }).toPromise();
    this.nStars = account['n_stars'];
    // logg(account, 'account');
    // this.nStars = answer
  }

  navigate(where) {
    this.router.navigate([where]);
  }

  navigateToMap(slug = 'map-world') {
    this.router.navigate([`/maps/${slug}`]);
  }

  async ngOnInit () {
    const path = ApiRouter.map(this.slug);
    const answer = await this.httpClient.get(path).toPromise();
    this.map = answer['map'];
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
