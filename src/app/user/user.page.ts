import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any;
  userReady: boolean = false;

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
    this.nativeStorage.getItem('google_user').then(data => {
      console.log('+++ user has data:', data)

      this.user = {
        name: data.name,
        email: data.email,
        picture: data.picture,
      };
      this.userReady = true;
      loading.dismiss();

      const params = new HttpParams().set('accessToken', data.accessToken).append('key', 'value')
      const answer = this.httpClient.get('http://localhost:3000/api/test', { params: params })
      answer.subscribe(data => {
        console.log('+++ from m3: ', data);
      }, error => {
        console.log('+++ error from m3:', error)
      })

    }, error =>{
      console.log(error);
      loading.dismiss();
    });
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

}
