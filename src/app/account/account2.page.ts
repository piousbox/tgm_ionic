import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

import { AppService } from '../app-service';

@Component({
  selector: 'app-account',
  templateUrl: './account2.page.html',
  styleUrls: ['./account.page.scss'],
})
export class Account2Page implements OnInit {

  constructor(
    private appService: AppService,
    private platform: Platform,
  ) {
    console.log('+++ account 2 constructor');
    this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    });
  }

  ngOnInit() {
    console.log('+++ account 2 ngOnInit');
    this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    });
  }

  ionViewDidLoad () {
    console.log('+++ ionViewDidLoad of account 2');
  }
  
}
