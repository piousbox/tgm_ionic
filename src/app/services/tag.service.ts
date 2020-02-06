import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private _http: HttpClient) { }

  getAllTags(): any {
    return this._http.get(`${environment.api_domain}/api/sites/view/piousbox.com/tags.json`);
  }
}
