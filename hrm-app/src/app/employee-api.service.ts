import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIService {


  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get("http://localhost:4000/user/get");

  }

  addUser(user:any)
  {
     return this.http.post("http://localhost:3000/user",user);
  }

  loginUser(credentials: { username: any; password: any; }){
    return this.http.post("http://localhost:4000/auth/login",{username:credentials.username,password:credentials.password});
  }

  logout(){
    
    return this.http.post("http://localhost:4000/auth/logout",{});
  }


  checkAuthenticated(){
    return this.http.post("http://localhost:4000/auth/checkAuthenticated",{});
  }








}
