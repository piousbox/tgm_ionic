import { Injectable, OnDestroy } from '@angular/core';
import { City } from '../classes/city';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private _url = environment.api;

  constructor(private _http: HttpClient) { }

  getCity(id: string): Observable<City> {
    if (!id) return of(null);
    return this._http.get(`${this._url}/cities.json`).pipe(map( (results: any[]) => {
      return results.filter( obj => City.fromJson(obj).id === id)[0] || null
    }))
  }

  getAllCities(): Observable<City[]> {
    return this._http.get(`${this._url}/cities.json`).pipe( map( (results: any[]) => results.map( obj => City.fromJson(obj))))
  }

}
