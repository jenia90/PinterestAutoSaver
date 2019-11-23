import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PinterestAuthResponse, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.sass']
})
export class CallbackComponent implements OnInit, OnDestroy {
  private accessToken: string;
  private authCode: string;
  private sub: any;

  constructor(private router: Router,
              private http: HttpClient,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.sub = this.route.queryParamMap.subscribe(obs => {
      if (obs.has('code')) {
        this.authCode = obs.get('code');
        console.log(this.authCode);
        this.getToken();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getToken() {
     this.http.post(`https://api.pinterest.com/v1/oauth/token?\
grant_type=authorization_code&client_id=${environment.clientId}\
&client_secret=${environment.clientSecret}\
&code=${this.authCode}`, null).subscribe((res: PinterestAuthResponse) => {
      this.authService.setToken(res);
      this.router.navigate(['pins']);
    });
  }
}
