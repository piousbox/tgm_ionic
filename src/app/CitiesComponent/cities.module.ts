import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesIndexPage } from './CitiesIndex.page';
import { CitiesShowPage } from './CitiesShow.page';

import { VenuesShow } from "../VenuesComponent/VenuesShow";
import { NewsitemsModule } from "../NewsitemsComponent/Newsitems.module";
import { RatingModule } from "../RatingComponent/rating.module";

const routes: Routes = [
  { path: '', component: CitiesIndexPage, },
  { path: 'travel-to/:cityname',     component: CitiesShowPage,  },
];

@NgModule({
  declarations: [ CitiesIndexPage, CitiesShowPage, VenuesShow ],
  imports: [
    RouterModule.forChild(routes),
    NewsitemsModule,
    RatingModule
  ]
})
export class CitiesModule {}
