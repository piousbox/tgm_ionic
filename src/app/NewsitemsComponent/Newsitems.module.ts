import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomefeedPage } from './homefeed.page';
import { NewsfeedPage } from './newsfeed.page';
import { NewsitemsList } from './newsitems.list';
import { AppModule } from '../app.module';
import { GalleriesShow } from '../GalleriesComponent/GalleriesShow';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';

const routes: Routes = [
  { path: '', component: HomefeedPage },
  { path: 'news', component: NewsfeedPage },
];

@NgModule({
  declarations: [ GalleriesShow, HomefeedPage, NewsfeedPage, NewsitemsList, ],
  entryComponents: [ GalleriesShow, ],
  exports: [ NewsitemsList ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes)
  ],
})
export class NewsitemsModule {}