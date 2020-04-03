import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-cities-news-feed',
  template: '<newsitems-list [newsitems]=newsitems></newsitems-list>',
  styleUrls: []
})
export class CityNewsFeed implements OnInit {
  newsitems = [];

  constructor(private _cityService: CityService) {
      
  }

  async ngOnInit() {
    this._cityService.citySubmenuData.subscribe(data => {
      this.newsitems = data;
    })
  }

}
