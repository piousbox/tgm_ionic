import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LayoutSidemenuModule } from "../LayoutSidemenu/LayoutSidemenu.module";
import { MetalineModule } from "../MetalineComponent/metaline.module";

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
    LayoutSidemenuModule,
    MetalineModule,
    RouterModule.forChild(routes),
  ]
})
export class GalleriesModule {}
