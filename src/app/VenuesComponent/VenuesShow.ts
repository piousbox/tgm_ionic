import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-venues',
  templateUrl: './VenuesShow.html',
  styleUrls: ["./VenuesShow.scss"],
})
export class VenuesShow implements OnInit{
  @Input() venues: Array<any> = [];
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
