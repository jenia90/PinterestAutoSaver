import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  private loggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loggedIn.next(this.isLoggedIn());
  }

  public onToggleSidenav = () => this.sidenavToggle.emit();

  public isLoggedIn = (): boolean => this.auth.isLoggedIn();

  public login() {
    this.auth.login();
  }

  public logout() {
    this.auth.logout();
  }
}
