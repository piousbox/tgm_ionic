import { HttpClient, HttpParams, } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenuController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { C, logg } from '../const';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  currentUser: any = {};
  @Output() eventEmitter = new EventEmitter();

  constructor(
    private appService: AppService,
    private httpClient: HttpClient, 
    private nativeStorage: NativeStorage,
    private router: Router,
    private toastController: ToastController,
  ) {
    logg('AccountPage constructor()');

    this.appService.currentUser.subscribe(msg => {
      logg(msg, 'AccountPage got currentUser');

      this.currentUser = msg;
      this.ngOnInit();
    })
  }

  navigate(where) {
    this.router.navigate([where]);
  }

  ngOnInit() {
    logg('AccountPage ngOnInit()');
  }

  async doFacebookLogout() {
    this.nativeStorage.remove('current_user');
    const toast = await this.toastController.create({ message: 'Logged out.', duration: 2000 });
    toast.present();
    // this.eventEmitter.emit(C.didLogout);
    this.appService.changeMessage(C.didLogout);
  }

  payMicro() {
    logg('AccountPage payMicro()');
  }

}
