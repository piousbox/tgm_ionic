import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { ApiRouter, AppRouter } from '../app-router';
import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { LayoutSidemenu } from '../LayoutSidemenu/LayoutSidemenu';
import { C, logg } from '../const';

@Component({
  selector: 'videos-index',
  templateUrl: './VideosIndex.html',
  styleUrls: [ './videos.scss' ],
})
export class VideosIndex implements OnInit {
  appRouter;
  slug;

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public httpClient: HttpClient,
  ) {
    this.appRouter = AppRouter;
    // this.slug = this.route.snapshot.paramMap.get('slug');
    this.ngOnInit();
  }
  
  async ngOnInit() {}

}
