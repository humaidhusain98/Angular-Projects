import { PhoneSignInComponent } from './phone-sign-in/phone-sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [{path:'login',component:LoginFormComponent},
{path:'phone',component:PhoneSignInComponent},

{path:'',component:DashboardComponent,canActivate:[AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
