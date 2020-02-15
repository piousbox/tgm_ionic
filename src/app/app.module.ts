import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';

import { ApiRouter, AppRouter } from './app-router';
import { AccountModule } from './AccountComponent/account.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutSidemenuModule } from './LayoutSidemenu/LayoutSidemenu.module';
import { ReportsModule } from './ReportsComponent/reports.module';

/**
 * import modules and NOT the components or services
 * declare components and NOT the modules or services.
 * provide services and NOT components or modules.
 */

@NgModule({
  declarations: [ AppComponent, ], // LayoutSidemenu
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), 
    LayoutSidemenuModule,
  ],
  providers: [
    AppRouter,
    Facebook,
    GooglePlus,
    NativeStorage,
    SplashScreen,
    StatusBar,
    Stripe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


