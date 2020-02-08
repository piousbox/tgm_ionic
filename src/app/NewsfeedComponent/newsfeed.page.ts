import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppRouter, ApiRouter } from '../app-router';
import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { C, logg } from '../const';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {

  currentUser = false;
  newsitems:Array<any> = [];

  constructor(
    private appService: AppService,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient, 
    public toastController: ToastController,
  ) {
    logg('NewsfeedPage#constructor');
    // appService.setTitle('Newsfeed');

    /* router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    }); */

    // this.render();
  }

  ngOnInit () {}

  render () {
    logg('newsfeed.page#render');

    this.nativeStorage.getItem('current_user').then(a=>JSON.parse(a)).then(data => {
      logg(data, 'current_user 5');

      this.currentUser = data;
      if ('facebook' == data.type) {
        const params = new HttpParams().set('accessToken', data.accessToken);
        logg(params, 'params');

        const answer = this.httpClient.get(ApiRouter.newsfeed, { params: params });
        // logg(answer, 'answer');

        answer.subscribe(data => {
          if (data['newsitems']) {
            this.newsitems = data['newsitems'];
          }
        }, async error => {
          console.log('+++ error from m3 1-:', JSON.stringify(error))
          const toast = await this.toastController.create({
            message: 'The token has expired? Please login.',
            duration: 2000
          });
          toast.present();
        });
      }
    }, async error => {
      console.log('+++ newsfeed doesnt have current_user:', error);
      const toast = await this.toastController.create({
        message: 'You are not logged in - please login.',
        duration: 2000
      });
      toast.present();
    });
  }

}

