import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { GalleriesShow } from "./GalleriesShow";

const routes: Routes = [
  { path: 'show/:galleryname', component: GalleriesShow,  },
];

@NgModule({
  declarations: [ GalleriesShow ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class GalleriesModule {}
