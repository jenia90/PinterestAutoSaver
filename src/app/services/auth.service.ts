import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CanActivate } from '@angular/router';
import { User, UserData } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare const PDK: any;

const JWT = 'pint_auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public currentUser: User = null;

  constructor(private http: HttpClient) {
    PDK.init({appId: environment.clientId, cookie: true});
  }

  public login() {
    PDK.login({scope: 'read_public,write_public,read_relationships,write_relationships'}, this.sessionCallback);
  }

  public logout() {
    PDK.logout();
    localStorage.removeItem(JWT);
  }

  public isLoggedIn(): boolean {
    return !!this.getSession();
  }

  public getSession(): PinterestSession | null {
    return JSON.parse(localStorage.getItem(JWT)) as PinterestSession;
  }

  public getLoggedinUser(): Observable<User> {
    return this.http.get<UserData>(`${environment.apiEndpoint}me/?fields=id,username,image`)
    .pipe(map(ud => {
      if (ud.data) {
        return ud.data;
      }
    }));
  }

  private sessionCallback(session: PinterestSession) {
    if (session) {
      localStorage.setItem(JWT, JSON.stringify(session));

      // this.getLoggedinUser().subscribe(u => this.currentUser = u);
    }
  }

  public canActivate(): boolean {
    return this.isLoggedIn();
  }
}

export interface PinterestSession {
  accessToken: string;
  scope: string;
}
