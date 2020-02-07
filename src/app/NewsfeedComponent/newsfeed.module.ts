import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppModule } from '../app.module';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';
import { NewsfeedPage } from './newsfeed.page';

const routes: Routes = [
  { path: '', component: NewsfeedPage },
];

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ NewsfeedPage ],
})
export class NewsfeedPageModule {}