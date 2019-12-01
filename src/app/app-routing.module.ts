import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PinsListComponent } from './components/pins-list/pins-list.component';
import { BoardsTreeComponent } from './components/boards-tree/boards-tree.component';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pins', component: PinsListComponent, canActivate: [AuthService]},
  { path: 'boards/:pinId', component: BoardsTreeComponent, canActivate: [AuthService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
