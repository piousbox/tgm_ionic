import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsitemsList } from './newsitems.list';
import { LayoutSidemenuModule } from '../LayoutSidemenu/LayoutSidemenu.module';
import { MetalineModule } from "../MetalineComponent/metaline.module";

import { SanitizeUrlPipe } from "../pipes/sanitizeUrl.pipe";
import { TransformYoutubeUrlPipe } from "../pipes/transformYoutubeUrl.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LayoutSidemenuModule,
        MetalineModule
    ],
    declarations: [NewsitemsList, SanitizeUrlPipe, TransformYoutubeUrlPipe],
    exports: [NewsitemsList, IonicModule, CommonModule, FormsModule, LayoutSidemenuModule]
  })
export class NewsitemsModule { }