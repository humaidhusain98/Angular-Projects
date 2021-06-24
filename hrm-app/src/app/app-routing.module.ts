import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DefaultComponent },
  { path: 'expired',component: UnAuthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
