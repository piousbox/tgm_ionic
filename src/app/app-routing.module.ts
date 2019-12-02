import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',  loadChildren: './pages/home/home.module#HomePageModule' },

  // { path: 'login',  loadChildren: './login/login.module#LoginPageModule' },

  { path: 'newsfeed',  loadChildren: './newsfeed/newsfeed.module#NewsfeedPageModule' },
  { path: 'newsfeed2', loadChildren: './newsfeed/newsfeed.module#NewsfeedPageModule' },
  { path: 'account',   loadChildren: './account/account.module#AccountPageModule' },

  { path: 'pages/faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'legal', loadChildren: './pages/legal/legal.module#LegalPageModule' },

  { path: 'navigator', loadChildren: './main-navigator/main-navigator.module#MainNavigatorModule' },
  { path: 'navigator/:extra', loadChildren: './main-navigator/main-navigator.module#MainNavigatorModule' },
  { path: 'page1', loadChildren: './main-navigator/page1/page1.module#Page1PageModule' },
  { path: 'page3', loadChildren: './main-navigator/page3/page3.module#Page3PageModule' },

  { path: 'video-sample', loadChildren: './video-sample/video-sample.module#VideoSamplePageModule' },

  { path: 'en/cities', loadChildren: './CitiesComponent/cities.module#CitiesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
