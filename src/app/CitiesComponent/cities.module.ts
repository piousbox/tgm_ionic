import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesIndexPage } from './CitiesIndex.page';
import { CitiesShowPage } from './CitiesShow.page';

import { SharedNewsitemsModule } from "../NewsitemsComponent/SharedNewsItems.module";

const routes: Routes = [
  { path: '', component: CitiesIndexPage, },
  { path: 'travel-to/:cityname',     component: CitiesShowPage,  },
];

@NgModule({
  declarations: [ CitiesIndexPage, CitiesShowPage ],
  imports: [
    RouterModule.forChild(routes),
    SharedNewsitemsModule,
  ]
})
export class CitiesModule {}
