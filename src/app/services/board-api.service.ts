import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { BoardData, Board } from '../models/board';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoardApiService {

  private API_ENDPOINT: string = environment.apiEndpoint;

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  public getAllPins(): Observable<Board[]> {
    const uri = `${this.API_ENDPOINT}me/boards/?fields=id,name,url,image`;
    const data = this.http.get<BoardData>(uri).pipe(map(bd => bd.data));
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
    const username = this.auth.currentUser.username;
    if (username) {
      this.http.post(`${this.API_ENDPOINT}/${username}/${pinId}`, null);
    }
  }
}
