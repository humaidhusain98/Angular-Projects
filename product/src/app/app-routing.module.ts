import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { BillingComponent } from './billing/billing.component';
import { PhoneComponent } from './phone/phone.component';
import { DashboardComponent } from './../../../hasura-demo/src/app/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'dash',component:DashboardComponent},
{path:'phone',component:PhoneComponent},
{path:'',component:ShoppingCartComponent},
{path:'billing',component:BillingComponent,canActivate:[AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
