import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configuration } from '../configuration';
import { Observable } from 'rxjs';
import { Tag } from '../classes/tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private _url = configuration.api || '';
  constructor(private _http: HttpClient) { }

  getAllTags(): Observable<Tag[]> {
    return this._http.get(`${this._url}/sites/view/piousbox.com/tags.json`).pipe( map( (results: any[]) => results.map(obj => Tag.fromJson(obj))));
  }

  getTagById(id: string): Observable<Tag> {
    return this._http.get(`${this._url}/sites/view/piousbox.com/tags.json`).pipe( map( (results: any[]) => {
      return results.filter(obj => Tag.fromJson(obj).id === id)[0] || null;
    }));
  }
}
