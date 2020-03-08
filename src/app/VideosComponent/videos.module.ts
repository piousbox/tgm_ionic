import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppModule } from '../app.module';
import { VideosIndex } from './VideosIndex';
import { VideosShow } from './VideosShow';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';

const routes: Routes = [
  { path: '', component: VideosIndex, },
  { path: 'show/:slug', component: VideosShow, },
];

@NgModule({
  imports: [
    // AppModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ VideosIndex, VideosShow ],
})
export class VideosModule {}
