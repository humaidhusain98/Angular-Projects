import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-deptemplate',
  templateUrl: './deptemplate.component.html',
  styleUrls: ['./deptemplate.component.css']
})
export class DeptemplateComponent implements OnInit {

  data:Array<any>;
  title="Departments";
  headers=["id","name"]
  
  
  
  constructor(private http:HttpClient,private service:RegistrationService) { }

  ngOnInit(): void {
  }


  getMedDept(id:string){
    this.service.getMedDepart(id).subscribe(
      (data)=>{console.log(data);
        this.data=data;
      
      });


  }
    

}
