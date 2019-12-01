import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CanActivate } from '@angular/router';
declare const PDK: any;

const JWT = 'pint_auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor() {
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
    return !!this.getSession() || !!localStorage.getItem(JWT);
  }

  public getSession(): PinterestSession | null {
    return !!PDK.getSession() ? PDK.getSession() : JSON.parse(localStorage.getItem(JWT)) as PinterestSession;
  }

  private sessionCallback(session: PinterestSession) {
    if (!!session) {
      localStorage.setItem(JWT, JSON.stringify(session));
    }
  }

  public getAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `bearer ${this.getSession().accessToken}`
    });
  }

  public canActivate(): boolean {
    return this.isLoggedIn();
  }
}

export interface PinterestSession {
  accessToken: string;
  scope: string;
}
