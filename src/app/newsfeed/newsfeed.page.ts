import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { NewsfeedPage } from './newsfeed.page';
// newsfeed: Newsfeed;

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage {

  constructor( private router: Router ) { }

}
