import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

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
  providers: [CityService]
})
export class CitiesShowPage implements OnInit {
  appRouter;
  city: any = {};
  slug;
  selectedTags: any = [];
  selectedMenu: string = "newsfeed";
  // videos: any = [];
  // reports: any = [];
  // venues: any = [];

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public httpClient: HttpClient,
    private _cityService: CityService,
    private splashScreen: SplashScreen,
  ) {
    this.splashScreen.hide();
    this.appRouter = AppRouter;
    this.slug = this.route.snapshot.paramMap.get('cityname');
  }

  async ngOnInit() {
    const answer = await this.httpClient.get(ApiRouter.city(this.slug)).toPromise();
    this.city = answer['city'];
    this.sendDataToChild();
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

  deSelectAll() {
    this.selectedTags = [];
  }

  changeMenuHandler(option) {
    this.selectedMenu = option;
    this.router.navigate([`/en/cities/travel-to/${this.slug}/show/${option}`]).then(() => {
      this.sendDataToChild();
    });
  }

  sendDataToChild() {
    let data = {};
    
    switch (this.selectedMenu) {
      case "newsfeed":
        data = this.city.newsitems;
        break;
      case "venues":
        data = this.city.venues;
    }
    this._cityService.citySubmenuData.next(data);
  }

}
