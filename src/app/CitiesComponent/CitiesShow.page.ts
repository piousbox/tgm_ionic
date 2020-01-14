import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { CityService } from '../services/city.service';
import { City } from '../classes/city';

@Component({
  selector: 'app-cities-show',
  templateUrl: './CitiesShow.page.html',
})
export class CitiesShowPage implements OnInit {
  cityName: any = '<No City>';
  cities: City[];

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public httpClient: HttpClient,
    private _cityService: CityService
  ) {
    this._cityService.getAllCities().subscribe( cities => this.cities = cities)
  }
  
  ngOnInit() {
    // this.cityName = this.route.snapshot.paramMap.get('city_name');
  }

  navigate (where) {}

}
