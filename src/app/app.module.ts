import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { BoardApiService } from './services/board-api.service';
import { PinApiService } from './services/pin-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PinComponent } from './components/pin/pin.component';
import { PinsListComponent } from './components/pins-list/pins-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardsTreeComponent } from './components/boards-tree/boards-tree.component';
import { MaterialModule } from './material.module';
import { JwtInterceptor } from './helpers/JwtInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PinComponent,
    PinsListComponent,
    NavbarComponent,
    BoardsTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    BoardApiService,
    PinApiService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
