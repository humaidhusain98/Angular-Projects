import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { fromEventPattern } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DefaultComponent } from './default/default.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FullinfoComponent } from './fullinfo/fullinfo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CustomHttpInterceptor } from './custom-http-interceptor';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { QrmodalComponent } from './qrmodal/qrmodal.component';
import { QRCodeModule } from 'angularx-qrcode';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    EmployeeComponent,
    DefaultComponent,
    FullinfoComponent,

    DialogComponent,

    DropdownComponent,

    UnAuthorizedComponent,

    QrmodalComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatGridListModule,
    HttpClientModule ,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent,
    QrmodalComponent],
  
})
export class AppModule { }
