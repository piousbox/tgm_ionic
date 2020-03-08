import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { environment } from '../../environments/environment';
import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { C, logg } from '../const';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-cities-index',
  templateUrl: './CitiesIndex.page.html',
  styleUrls: ['./citiesIndex.scss']
})
export class CitiesIndexPage implements OnInit {

  cities: any = [];
  filteredCities: any = [];
  filterValue: string = "";

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private router: Router,
    public httpClient: HttpClient,
    public toastController: ToastController,
  ) {
    const answer = this.httpClient.get(ApiRouter.citiesindex)
    answer.subscribe(data => {
      if (data) {
        this.cities = data;
        this.filteredCities = data;
      }
    }, async error => {
      console.log('+++ citiesindex 1:', error)
      const toast = await this.toastController.create({
        message: error,
        duration: 2000
      });
      toast.present();
    });
  }

  navigateToCity(c) {
    logg(c, 'c');
    this.router.navigate([AppRouter.cityPath(c)]);
  }

  ngOnInit() {
  }

  filterHandler() {

    this.filteredCities = this.cities.filter(city => {
      return city.name
        .toLowerCase()
        .indexOf(this.filterValue.trim().toLowerCase()) > -1;
    });

  }

}
