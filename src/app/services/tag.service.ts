import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../classes/tag';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private _url = environment.api;
  constructor(private _http: HttpClient) { }

  getAllTags(): Observable<Tag[]> {
    return this._http.get(`${this._url}/sites/view/piousbox.com/tags.json`).pipe( map( (results: any[]) => results.map(obj => Tag.fromJson(obj))));
  }
}
