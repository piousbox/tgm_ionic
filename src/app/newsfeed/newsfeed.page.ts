import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

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
    public httpClient: HttpClient, 
  ) {
    console.log('+++ newsfeed constructor');
    appService.setTitle('Newsfeed');
    this.mainTitle = this.appService.title;

    this.nativeStorage.getItem('current_user').then(data => {
      this.currentUser = data;
      console.log('+++ newsfeed currentUser:', data);

      if ('facebook' == data.type) {
        const params = new HttpParams().set('accessToken', data.accessToken)
        const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
        answer.subscribe(data => {
          if (data['newsitems']) {
            this.newsitems = data['newsitems'];
          }
        }, error => {
          console.log('+++ error from m3:', error)
        });
      }
    }, error => {
      console.log('+++ newsfeed doesnt have current_user:', error);
    });
  }

  ngOnInit() {
    console.log('+++ newsfeed ngOnInit');
    /* this.platform.ready().then(() => {
      this.appService.setTitle('Account');
    }); */
  }

  ionViewDidLoad () {
    console.log('+++ newsfeed ionViewDidLoad');

    /* this.nativeStorage.getItem('current_user').then(data => {
      this.currentUser = data;
      console.log('+++ newsfeed:', data);

      if ('facebook' == data.type) {
        const params = new HttpParams().set('accessToken', data.accessToken)
        const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
        answer.subscribe(data => {
          console.log('+++ from m3: ', data);
          
          if (data['newsitems']) {
            this.newsitems = data['newsitems'];
          }
        }, error => {
          console.log('+++ error from m3:', error)
        });
      }
    }, error => {
      console.log('+++ newsfeed doesnt have current_user:', error);
    }); */
  }

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
