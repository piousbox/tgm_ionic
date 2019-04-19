import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router,
  ) { }

  navigate(where) {
    this.router.navigate([where]);
  }

  ngOnInit() {
  }

  openFirst() {
    console.log('+++ opening first');
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    console.log('+++ opening custom');
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
