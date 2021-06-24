import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from '../employee-api.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private empServ:EmployeeAPIService) { }

  ngOnInit(): void {
    this.empServ.checkAuthenticated().subscribe((data)=>{
      console.log("Authenticated Successful : ");
      console.log(data);
    },(error)=>{
      console.log("Authentication Unsuccesful :");
      console.log(error);
    })
  }

}
