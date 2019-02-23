import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook, } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage {
  galleries: any

  constructor( 
    private router: Router,
    private nativeStorage: NativeStorage,
    private fb: Facebook,
    public httpClient: HttpClient, 
  ) {
    this.nativeStorage.getItem('facebook_user').then( data => {
      console.log('+++ have this data:', data)

      const params = new HttpParams().set('accessToken', data.accessToken).append('key', 'value')
      const galleries = this.httpClient.get('http://localhost:3000/api/galleries', { params: params, })
      galleries.subscribe((data: any) => {
        console.log('+++ my m3 data: ', data);
        this.galleries = data
      }, error => {
        console.log('+++ error from m3:', error)
      })
    }, error => {
      console.log('+++ error 1:', error)
    })
  }

  doFacebookLogout(){
    this.nativeStorage.remove('facebook_user')
    this.router.navigate(["/login"])

    /* this.fb.logout().then(res => {
      console.log('+++ ok', res)  
    }, err => {
      console.log(err)
    }) */
  }

}
