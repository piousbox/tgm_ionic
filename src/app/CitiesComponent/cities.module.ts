import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CitiesIndexPage } from './CitiesIndex.page';
import { CitiesShowPage } from './CitiesShow.page';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';

const routes: Routes = [
  { path: '', component: CitiesIndexPage, },
  { path: 'travel-to/:cityname',     component: CitiesShowPage,  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ CitiesIndexPage, CitiesShowPage, ]
})
export class CitiesModule {}
