import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-sidemenu',
  templateUrl: 'LayoutSidemenu.html',
})
export class LayoutSidemenu implements OnInit {
  currentUser:any = {};
  currentUserStr:string = '<none>';

  env:string = '<none>';

  isApp:boolean = true;

  mainTitle:string = '';
  mainFooterVisible:string = '';
  message:string;

  platformList:string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}

  navigate(where) {
    if ('string' === typeof where) {
      this.mainTitle = where;
      this.router.navigate([where]);
    } else if ('object' === typeof where) {
      this.mainTitle = where['kind'];
      let here = '';
      switch (where['kind']) {
      case 'report': {
        here = '/reports';
        break;
      } default: {
      } }
      this.router.navigate([here]);
    }
  }

}
