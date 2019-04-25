import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Platform } from '@ionic/angular';

import { AppService } from '../app-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private appService: AppService,
    private platform: Platform,
    private router: Router,
  ) {
    console.log('+++ account constructor');
    this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    });

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit() {
    console.log('+++ account ngOnInit');
    this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    });
  }

}
