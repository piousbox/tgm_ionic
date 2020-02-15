import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppModule } from '../app.module';
import { AccountPage } from './account.page';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';

const routes: Routes = [
  { path: '',     component: AccountPage,  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSidemenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ AccountPage ],
})
export class AccountModule {
}
