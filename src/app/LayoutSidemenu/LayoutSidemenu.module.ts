import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LayoutSidemenu } from './LayoutSidemenu';

@NgModule({
  declarations: [ LayoutSidemenu ],
  exports: [ LayoutSidemenu ],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class LayoutSidemenuModule {}
