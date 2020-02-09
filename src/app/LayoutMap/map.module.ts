import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MapPage } from './map.page';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';
import { GetStars } from './GetStars';

const routes: Routes = [
  { path: '', component: MapPage },
  { path: ':slug', component: MapPage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ MapPage, GetStars ],
  entryComponents: [ GetStars ],
})
export class MapModule {}