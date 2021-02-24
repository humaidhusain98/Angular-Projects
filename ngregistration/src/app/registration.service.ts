import { Injectable } from '@angular/core';
import {User} from './user';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://ec2-18-219-237-104.us-east-2.compute.amazonaws.com:8080/login",user)
    

  }

  public login(username:string,password:string){
    const headers=new HttpHeaders({Authorization:'Basic '+btoa(username+":"+password)});
    return this._http.get("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/secure/success",{headers,responseType:'text' as'json'})
  }

  
  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/secure/admin/add",user)

  }

  public logout(){
    return this._http.get<any>("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/logout")
  }
  
  getmc():Observable<any>{
    return this._http.get<any>("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/medical-centers")
  }

  getmcsearch(key:string):Observable<any>{
    return this._http.get<any>(("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/medical-centers/search/"+key))
  }

  getDepartments():Observable<any>{
    return this._http.get<any>("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/departments")
  }

  getDoctors():Observable<any>{
    return this._http.get<any>("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/doctors")
  }

  getMedDepart(id:string):Observable<any>{
    return this._http.get<any>("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/medical-centers"+"/"+id)
  }
  getDocsearch(key:string):Observable<any>{
    return this._http.get<any>(("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/doctors/search/"+key))
  }

  getDeptsearch(key:string):Observable<any>{
    return this._http.get<any>(("http://ec2-3-129-19-168.us-east-2.compute.amazonaws.com:8080/departments/search/"+key))
  }
  

}
