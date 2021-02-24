import { DepartmentsComponent } from './departments/departments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { McComponent } from './mc/mc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'loginsucess',component:LoginsucessComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'signin', component:LoginComponent},
  {path:'mc', component:McComponent},
  {path:'doctors', component:DoctorsComponent},
  {path:'departments', component:DepartmentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
