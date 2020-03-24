import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomefeedPage } from './homefeed.page';
import { NewsfeedPage } from './newsfeed.page';
import { NewsitemsModule } from "./Newsitems.module";
import { AppModule } from '../app.module';
import { GalleriesShow } from '../GalleriesComponent/GalleriesShow';

const routes: Routes = [
  { path: '', component: HomefeedPage },
  { path: 'news', component: NewsfeedPage },
];

@NgModule({
  declarations: [HomefeedPage, NewsfeedPage],
  imports: [
    NewsitemsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomefeedModule { }