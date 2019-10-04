import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cities-show',
  templateUrl: './CitiesShow.page.html',
})
export class CitiesShowPage implements OnInit {
  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private router: Router,
    public httpClient: HttpClient, 
  ) {}
  
  ngOnInit() {}
}
