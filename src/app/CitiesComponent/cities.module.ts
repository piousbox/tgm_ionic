import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesIndexPage } from './CitiesIndex.page';
import { CitiesShowPage } from './CitiesShow.page';

import { VenuesShow } from "../VenuesComponent/VenuesShow";
import { CityVenues } from "./CityVenues";
import { NewsitemsModule } from "../NewsitemsComponent/Newsitems.module";
import { RatingModule } from "../RatingComponent/rating.module";
import { CityNewsFeed } from './CityNewsFeed';

const routes: Routes = [
  { path: '', component: CitiesIndexPage, },
  { path: 'travel-to/:cityname',  component: CitiesShowPage, 
    children: [
      {
        path: "",
        component: CityNewsFeed
      },
      {
        path: "show/newsfeed",
        component: CityNewsFeed
      },
      {
        path: "show/venues",
        component: CityVenues
      }
    ]
},
];

@NgModule({
  declarations: [ CitiesIndexPage, CitiesShowPage, CityVenues, CityNewsFeed, VenuesShow ],
  imports: [
    RouterModule.forChild(routes),
    NewsitemsModule,
    RatingModule
  ]
})
export class CitiesModule {}
