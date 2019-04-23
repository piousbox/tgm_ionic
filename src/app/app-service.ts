import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  title: string = 'Initial Title';

  constructor() { }

  getTitle () {
    this.title = 'Some Title';
  }

  setTitle (which) {
    console.log('+++ app-service setTitle:', which);
    
    this.title = which;
  }

}
