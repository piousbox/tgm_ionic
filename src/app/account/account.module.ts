import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import { Account2Page } from './account2.page';

const routes: Routes = [
  { path: '',     component: AccountPage,  },
  { path: 'acc2', component: Account2Page, },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountPage, Account2Page]
})
export class AccountPageModule {}
