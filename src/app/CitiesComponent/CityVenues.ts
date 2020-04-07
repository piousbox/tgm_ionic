import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-cities-venues',
  template: '<app-venues [venues]=venues></app-venues>',
  styleUrls: []
})
export class CityVenues implements OnInit {
  venues = [];

  constructor(private _cityService: CityService) {
    this._cityService.citySubmenuData.subscribe(data => {
      this.venues = data;
    })
  }

  async ngOnInit() {
  }

}
