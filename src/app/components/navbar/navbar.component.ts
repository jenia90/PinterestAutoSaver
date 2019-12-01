import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  public loginState: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loginState = this.isLoggedIn();
  }

  public onToggleSidenav = () => this.sidenavToggle.emit();

  public isLoggedIn = (): boolean => this.auth.isLoggedIn();

  public login() {
    this.auth.login();
  }

  public logout() {
    this.auth.logout();
    this.loginState = this.isLoggedIn();
  }

}
