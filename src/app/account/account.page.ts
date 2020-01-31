import { HttpClient, HttpParams, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenuController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  currentUser: any = {};

  constructor(
    private appService: AppService,
    private httpClient: HttpClient, 
    private nativeStorage: NativeStorage,
    private router: Router,
    private toastController: ToastController,
  ) {
    console.log('+++ account constructor');
  }

  navigate(where) {
    this.router.navigate([where]);
  }

  ngOnInit() {
  }

  async doFacebookLogout () {
    console.log('+++ logging out facebook...');
    this.nativeStorage.remove('current_user');
    const toast = await this.toastController.create({ message: 'Logged out.', duration: 2000 });
    toast.present();
  }

}
