import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'maps', loadChildren: './MapComponent/map.module#MapModule' },
  { path: 'abba', component: './MapComponent/map.module#MapModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
