import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { McComponent } from './mc/mc.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DeptemplateComponent } from './deptemplate/deptemplate.component';
import { DoctemplateComponent } from './doctemplate/doctemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsucessComponent,
    DashboardComponent,
    McComponent,
    DoctorsComponent,
    DepartmentsComponent,
    DeptemplateComponent,
    DoctemplateComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
