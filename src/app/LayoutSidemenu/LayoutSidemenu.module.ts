import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LayoutFab } from './LayoutFab';
import { LayoutSidemenu } from './LayoutSidemenu';

@NgModule({
  declarations: [ LayoutSidemenu, LayoutFab ],
  exports: [ LayoutSidemenu, LayoutFab ],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class LayoutSidemenuModule {}
