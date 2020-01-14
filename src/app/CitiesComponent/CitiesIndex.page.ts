import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { CityService } from '../services/city.service';
import { City } from '../classes/city';

@Component({
  selector: 'app-cities-index',
  templateUrl: './CitiesIndex.page.html',
})
export class CitiesIndexPage implements OnInit {

  cities: City[];

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private router: Router,
    public httpClient: HttpClient,
    private _cityService: CityService
  ) {
    this._cityService.getAllCities().subscribe( cities => this.cities = cities)
  }
  navigate(where) {
    this.router.navigate([where]);
  }
  ngOnInit() {}
}
