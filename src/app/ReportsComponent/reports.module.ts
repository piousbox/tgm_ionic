import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ReportsIndexPage } from './ReportsIndex.page';
import { ReportsShowPage } from './ReportsShow.page';

const routes: Routes = [
  { path: '', component: ReportsIndexPage, },
  { path: 'show/:reportname', component: ReportsShowPage, },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ ReportsIndexPage, ReportsShowPage ]
})
export class ReportsModule {}
