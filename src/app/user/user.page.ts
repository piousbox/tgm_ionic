import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any = {};
  userReady: boolean = false;
  newsitems: any = [];
  env: any = {};

  constructor(
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    private router: Router,
    private fb: Facebook,
    public loadingController: LoadingController,
    public httpClient: HttpClient, 
  ) { }

  navigate(where) {
    this.router.navigate([where]);
  }
  
  async ngOnInit() {    
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    this.env = environment;

    this.nativeStorage.getItem('facebook_user').then(data => {
      console.log('+++ fb local data:', data);
      loading.dismiss();

      const params = new HttpParams().set('accessToken', data.accessToken)
      const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
      answer.subscribe(data => {
        console.log('+++ from m3: ', data);
        
        if (data['newsitems']) {
          this.newsitems = data['newsitems'];
        }
      }, error => {
        console.log('+++ error from m3:', error)
      })
    });

    /* this.nativeStorage.getItem('google_user').then(data => {
      console.log('+++ user has data:', data)

      this.user.name = data.name;
      this.user.email = data.email;
      this.user.picture = data.picture;
      
      this.userReady = true;
      loading.dismiss();

      const params = new HttpParams().set('accessToken', data.accessToken).append('idToken', data.idToken)
      const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
      answer.subscribe(data => {
        console.log('+++ from m3: ', data);
        if (data['newsitems']) {
          this.newsitems = data['newsitems'];
        }
      }, error => {
        console.log('+++ error from m3:', error)
      })

    }, error =>{
      console.log(error);
      loading.dismiss();
    }); */
  }

  doGoogleLogout(){
    this.googlePlus.logout().then(res => {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('google_user');
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    });
  }

  doFacebookLogout () {
    console.log('+++ logging out facebook...');

    this.nativeStorage.remove('facebook_user');
    this.nativeStorage.remove('google_user');
    this.nativeStorage.clear();

    this.fb.logout();
  }

  doFacebookLogin () {
    this.fb.login(['public_profile', 'user_friends', 'email']
    ).then((res: any) => { // res: FacebookLoginResponse
      const r = res.authResponse
      console.log('+++ Logged into Facebook!', r)
      this.nativeStorage.setItem('facebook_user', {
        accessToken: r.accessToken,
        signedRequest: r.signedRequest,
        userID: r.userID,
      }).then(() => {
        this.router.navigate(['/user'])
      }, (error) => {
        console.log('+++ error:', error)
      })
    }).catch(e => console.log('Error logging into Facebook', e));
  }

}
