import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {
  currentUser: any = null;
  newsitems: any = [];
  mainTitle: string = '';

  constructor(
    private nativeStorage: NativeStorage,
    private appService: AppService,
    private router: Router,
    public httpClient: HttpClient, 
  ) {
    appService.setTitle('Newsfeed');
    this.mainTitle = 'Newsfeed';

    this.nativeStorage.getItem('current_user').then(data => {
      this.currentUser = data;
      if ('facebook' == data.type) {
        const params = new HttpParams().set('accessToken', data.accessToken)
        const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
        answer.subscribe(data => {
          if (data['newsitems']) {
            this.newsitems = data['newsitems'];
          }
        }, error => {
          console.log('+++ error from m3 1-:', JSON.stringify(error))
        });
      }
    }, error => {
      console.log('+++ newsfeed doesnt have current_user:', error);
    });

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit() {}

  ionViewDidLoad () {}

}


/**
  ionViewDidLoad
  ionViewWillEnter
  ionViewDidEnter
  ionViewWillLeave
  ionViewDidLeave
  ionViewWillUnload
  ionViewCanEnter
*/
