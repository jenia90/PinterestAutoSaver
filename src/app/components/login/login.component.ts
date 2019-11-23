import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {
    console.log('LoginComponent Loaded.');
  }

  ngOnInit() {
  }

  public login() {
    window.open(`https://api.pinterest.com/oauth/?response_type=code\
&redirect_uri=https://localhost:4200/login/callback\
&client_id=${environment.clientId}\
&scope=read_public,write_public\
&state=768uyFys`);
  }

}
