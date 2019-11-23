import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/login/callback/callback.component';
import { PinsListComponent } from './components/pins-list/pins-list.component';


const routes: Routes = [
  { path: 'pins', component: PinsListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'login/callback', component: CallbackComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
