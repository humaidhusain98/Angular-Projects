import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from '../employee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private empServ:EmployeeAPIService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.empServ.logout().subscribe((data)=>{
      console.log("Logout Successfull");
      this.router.navigate(["login"]);
    },(error)=>{
      console.log("Error :" + error.message);

    })
  }
}
