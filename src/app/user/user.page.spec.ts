import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHandler, } from '@angular/common/http';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';

import { UserPage } from './user.page';

describe('UserPage', () => {
  let component: UserPage;
  let fixture: ComponentFixture<UserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ 
        GooglePlus, 
        HttpClient, HttpHandler,
        LoadingController,
        NativeStorage, 
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
