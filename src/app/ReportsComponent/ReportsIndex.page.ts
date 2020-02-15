import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { C, logg } from '../const';


@Component({
  selector: 'app-reports-index',
  templateUrl: './ReportsIndex.page.html',
})
export class ReportsIndexPage implements OnInit {
  reports: any = [];

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public httpClient: HttpClient,
  ) {
    logg('reportsIndex#constructor');
  }
  
  ngOnInit() {
  }

}
