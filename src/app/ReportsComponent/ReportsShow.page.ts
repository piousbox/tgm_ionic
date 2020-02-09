import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { C, logg } from '../const';

@Component({
  selector: 'app-reports-show',
  styleUrls: ['./ReportsShow.page.scss'],
  templateUrl: './ReportsShow.page.html',
})
export class ReportsShowPage implements OnInit {
  report: any = {};

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public httpClient: HttpClient,
    public platform: Platform,
  ) {
    logg('reportsShow#constructor');
    logg(this.route.snapshot, 'route.snapshot');
    
    let reportname = this.route.snapshot.params.reportname;
    this.platform.ready().then((readySource) => {
      // Platform now ready, execute any required native code
      this.nativeStorage.getItem('current_user').then(async data => {
        logg(data, 'data');
        let p2 = new HttpParams().set('accessToken', data.longTermToken);
        const answer = await this.httpClient.get(ApiRouter.report({ reportname: reportname }), { params: p2 }).toPromise();
        logg(answer, 'answer');
        this.report = answer['report'];
      }).catch(e => logg(e, 'eee 1'));
    });
    
  }
  
  ngOnInit() {
  }

}
