import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesIndexPage } from './CitiesIndex.page';
import { CitiesShowPage } from './CitiesShow.page';

import { NewsitemsModule } from "../NewsitemsComponent/Newsitems.module";

const routes: Routes = [
  { path: '', component: CitiesIndexPage, },
  { path: 'travel-to/:cityname',     component: CitiesShowPage,  },
];

@NgModule({
  declarations: [ CitiesIndexPage, CitiesShowPage ],
  imports: [
    RouterModule.forChild(routes),
    NewsitemsModule,
  ]
})
export class CitiesModule {}
