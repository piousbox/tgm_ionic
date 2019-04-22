import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private appService: AppServiceService,
    private platform: Platform,
  ) {
    console.log('+++ account constructor');
    this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    });
  }

  ngOnInit() {
    console.log('+++ account ngOnInit');
    this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    });
  }

}
