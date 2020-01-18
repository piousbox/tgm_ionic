import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './CitiesIndex.page.html',
})
export class CitiesComponent2 implements OnInit {
    cities: any = [];
  constructor(){}
  ngOnInit(){}
  navigate(where){}
}
