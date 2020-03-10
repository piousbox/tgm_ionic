import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { ApiRouter, AppRouter } from '../app-router';
import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { CityService } from '../services/city.service';
import { LayoutSidemenu } from '../LayoutSidemenu/LayoutSidemenu';
import { C, logg } from '../const';

@Component({
  selector: 'app-cities-show',
  templateUrl: './CitiesShow.page.html',
  styleUrls: ['./cities.scss'],
})
export class CitiesShowPage implements OnInit {
  appRouter;
  city: any = {};
  slug;
  selectedTags: any = [];
  selectedMenu: string = "newsfeed";
  videos: any = [];
  reports: any = [];

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public httpClient: HttpClient,
    private _cityService: CityService
  ) {
    this.appRouter = AppRouter;
    this.slug = this.route.snapshot.paramMap.get('cityname');
    this.ngOnInit();
  }

  async ngOnInit() {
    const answer = await this.httpClient.get(ApiRouter.city(this.slug)).toPromise();
    this.city = answer['city'];
    this.reports = this.city.reports.map(item => {
      item.item_type = "report";
      return item;
    });

    this.videos = this.city.videos.map(item => {
      item.item_type = "video";
      return item;
    });
  }

  navigate(where) { }

  tagSelection(tag) {

    const index = this.selectedTags.findIndex(item => {
      return item === tag.slug;
    });

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag.slug);
    }

  }

  deSelectAll(){
    this.selectedTags = [];
  }

  getBackgroundImage(url) {
    return `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.4)), url("${url}")`;
  }

  changeMenuHandler(option) {
    this.selectedMenu = option;
  }

}
