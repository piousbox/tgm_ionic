import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import {
  HttpBackend,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { 
  HttpClientTestingModule, 
  HttpTestingController,
} from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { MenuController, Platform, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { ApiRouter } from '../app-router';
import { HomefeedPage } from './homefeed.page';

describe('HomefeedPage', () => {
  let component: HomefeedPage;
  let fixture: ComponentFixture<HomefeedPage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomefeedPage ],
      imports: [ HttpClientTestingModule, ],
      providers: [ 
        NativeStorage, 
        Platform, 
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } },
        ToastController,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(HomefeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // should have called api
    // should have set newsitems
  });

  it('can test HttpClient.get', () => {
    const testData = {name: 'Test Data'};

    /* httpClient.get<Data>(testUrl)
      .subscribe(data =>
        expect(data).toEqual(testData)
      ); */

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(ApiRouter.homefeed);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

});







