import { Component, OnInit } from '@angular/core';
import { EmployeeAPIService } from '../employee-api.service';
import { user } from '../models/user';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  users:user[];

  constructor(private empService:EmployeeAPIService,public dialog: MatDialog,private router:Router) {
    this.users=[];
   }

  ngOnInit(): void {
    this.empService.getAllUser().subscribe((data:any)=>{
    console.log(data.results);
     this.users=<user[]>data.results;
     console.log(this.users);

     },(error)=>{
       this.router.navigate(['login']);
     })

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

  dialogConfig.position = {
    
  };


    dialogConfig.autoFocus = true;

    this.dialog.open(DialogComponent, dialogConfig);
}

   printData(){
    console.log("Hello"); 
  
  }

 



}

