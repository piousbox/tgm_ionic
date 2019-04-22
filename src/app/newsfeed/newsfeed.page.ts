import { Component } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage {
  currentUser: any = null;

  constructor(
    private nativeStorage: NativeStorage,
  ) {
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
          console.log('+++ error from m3:', error)
        });
      }
    }, error => {
      console.log('+++ newsfeed doesnt have current_user:', error);
    });
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
