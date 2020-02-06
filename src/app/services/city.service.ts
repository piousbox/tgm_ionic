import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private _http: HttpClient) { }

  getAllCities(): any {
    return this._http.get(`${environment.api_domain}/api/cities.json`);
  }

}
