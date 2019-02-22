import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage {
  films: Observable<any>;

  constructor( 
    private router: Router,
    public httpClient: HttpClient, 
  ) {
    this.films = this.httpClient.get('http://localhost:3000/api');
    this.films.subscribe(data => {
      console.log('+++ my data: ', data);
    });
  }

}
