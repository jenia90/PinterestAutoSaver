import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { BoardApiService } from './services/board-api.service';
import { PinApiService } from './services/pin-api.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/login/callback/callback.component';
import { PinComponent } from './components/pin/pin.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator'
import { PinsListComponent } from './components/pins-list/pins-list.component';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent,
    PinComponent,
    PinsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    BoardApiService,
    PinApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
