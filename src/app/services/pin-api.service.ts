import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Pin, PinData } from '../models/pin';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Board } from '../models/board';

declare const PDK: any;

@Injectable({
  providedIn: 'root'
})
export class PinApiService {
  private API_ENDPOINT: string = environment.apiEndpoint;

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  public getAllPins(): Observable<Pin[]> {
    const uri = `${this.API_ENDPOINT}me/pins/?fields=id,link,note,url,board,color,image`;
    const data = this.http.get<PinData>(uri).pipe(map(ud => ud.data));
    console.log(data);
    return data;
    // if (this.auth.isLoggedIn()) {
    //     return of(PDK.request('/me/pins/', 'GET',
    //               {fields: 'id,link,note,url,attribution,board,color,counts,created_at,image,media,metadata,original_link'})
    //               .data as Pin[]);
    // }
    // return new Observable<Pin[]>();
  }

  // public getPinsOnBoard(board: Board): Observable<PinData> {
  //   const uri = `${this.API_ENDPOINT}boards/${this.auth.getSession()}`;
  // }
}
