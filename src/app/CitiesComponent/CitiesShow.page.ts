import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-cities-show',
  templateUrl: './CitiesShow.page.html',
})
export class CitiesShowPage implements OnInit {
  private _id: any = null;
  city: any = {};

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public httpClient: HttpClient,
    private _cityService: CityService
  ) { }
  
  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('city_name');
    // this._cityService.getCity(this._id).subscribe( city => this.city = city);
  }

  navigate (where) {}

}
