import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsitemsList } from './newsitems.list';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LayoutSidemenuModule,
    ],
    declarations: [NewsitemsList],
    exports: [NewsitemsList, IonicModule, CommonModule, FormsModule, LayoutSidemenuModule]
  })
export class SharedNewsitemsModule { }