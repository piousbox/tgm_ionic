import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  constructor(
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    private router: Router,
    private platform: Platform,
    private fb: Facebook,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public httpClient: HttpClient, 
  ) {
    
  }

  async doFacebookLogin () {
    FB.init({
      appId: '123014244977505',
      status: true, xfbml: true, version: 'v2.7',
    })

    this.fb.login(['public_profile', 'user_friends', 'email']
      ).then((res: FacebookLoginResponse) => {
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

  async doGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      }).then(user => {
        console.log('+++ user is:', user);

        //save user data on the native storage
        this.nativeStorage.setItem('google_user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl,
          accessToken: user.accessToken,
          idToken: user.idToken,
          userId: user.userId,
        }).then(() => {
           this.router.navigate(["/user"]);
        }, (error) => {
          console.log(error);
        })
        loading.dismiss();
      }, err => {
        console.log(err);
        if(!this.platform.is('cordova')){
          this.presentAlert();
        }
        loading.dismiss();
      })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }


  async presentLoading(loading) {
    return await loading.present();
  }

}
