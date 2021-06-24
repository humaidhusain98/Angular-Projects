import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder ,Validators} from '@angular/forms';
import { EmployeeAPIService } from '../employee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  form:FormGroup;


  constructor(private fb:FormBuilder,private empServ:EmployeeAPIService,private router:Router) {
    this.form=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.empServ.checkAuthenticated().subscribe((data)=>{
      console.log("Authenticated Successful : ");
      this.router.navigate(['']);
      console.log(data);
    },(error)=>{
      console.log("Authentication Unsuccesful :");
      console.log(error);
    })

  }


  login(){
    
      this.empServ.loginUser(this.form.value).subscribe((data)=>{
        console.log("Logged In Successful : "+data);
        this.router.navigate(['']);
      },(error=>{
        console.log(error);
      }));
   
  
  }

 


 

}
