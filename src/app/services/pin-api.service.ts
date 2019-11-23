import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PinApiService {
  private API_ENDPOINT: string = environment.apiEndpoint + 'me/pins/?';

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  public getAllPins() {
    const uri = `${this.API_ENDPOINT}fields=${[
      'id', 'link', 'note', 'url',
      'attribution', 'board', 'color',
      'counts', 'created_at', 'image',
      'media', 'metadata', 'original_link'
      ].join(',')}`;
    const data = this.http.get(uri, {headers: this.auth.getAuthorizationHeader()});
    console.log(data);
    return data;
  }
}
