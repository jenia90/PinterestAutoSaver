import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: PinterestAuthResponse;

  constructor(private http: HttpClient,
              private router: Router) { }

  public setToken(token: PinterestAuthResponse) {
    this.authToken = token;
  }

  public getToken(): PinterestAuthResponse {
    return this.authToken;
  }

  public getAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `${this.authToken.token_type} ${this.authToken.access_token}`
    });
  }
}

export interface PinterestAuthResponse {
  token_type: string;
  scope: string[];
  access_token: string;
}
