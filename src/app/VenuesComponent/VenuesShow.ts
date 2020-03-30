import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-venues',
  templateUrl: './VenuesShow.html',
  styleUrls: ["./VenuesShow.scss"],
})
export class VenuesShow implements OnInit{
  private _venues: Array<any> = [];
  @Input() set venues(value){
    this._venues = value;
    this.filteredVenues = value;
  };

  get venues(){
    return this._venues;
  }

  defaultRating: number = 3.5;
  filterValue: string = "";
  filteredVenues: Array<any> = [];

  constructor() { }

  ngOnInit(){
    this.filteredVenues = this.venues;
  }

  filterHandler(){
    this.filteredVenues = this.venues.filter(venue => {
      return venue.name.toLowerCase().includes(this.filterValue.toLowerCase());
    })
  }

}
