import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardApiService {

  private API_ENDPOINT: string = environment.apiEndpoint + 'me/boards/';

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  public getAllPins(): Observable<BoardData> {
    const uri = `${this.API_ENDPOINT}fields=id,name,url,image`;
    const data = this.http.get<BoardData>(uri, {headers: this.auth.getAuthorizationHeader()});
    console.log(data);
    return data;
    // if (this.auth.isLoggedIn()) {
    //     return of(PDK.request('/me/boards/', 'GET',
    //               {fields: 'id,name,url,image'})
    //               .data as Pin[]);
    // }
    // return new Observable<Pin[]>();
  }

  public pinToBoard(pinId: number) {

  }
}

export interface BoardData {
  data: Board[];
}
