import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { C, logg } from './const';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  

  title:string = 'Initial Title';
  
  constructor() {}

  setTitle (which) {
    console.log('+++ app-service setTitle:', which);
    this.title = which;
  }

  private messageSource = new BehaviorSubject(C.defaultMessage);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) { this.messageSource.next(message) }

  private currentUserSource = new BehaviorSubject(false);
  currentUser = this.currentUserSource.asObservable();
  setCurrentUser(msg) {
    logg(msg, 'setCurrentUser()');
    this.currentUserSource.next(msg);
  }
  
}
