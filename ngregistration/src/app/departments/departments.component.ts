import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  data:Array<any>;
  title="Departments";
  headers=["id","name"]
  search:string='';
  


  constructor(private http:HttpClient,private service:RegistrationService) { 
    
    this.data=new Array<any>();
    this.service.getDepartments().subscribe(
      (data)=>{console.log(data);
        this.data=data;
      
      }
      


  )

  }

  ngOnInit(): void {
  }



  getSearch(){
    if(this.search=='')
    {
      this.service.getDepartments().subscribe(
        (data)=>{console.log(data);
          this.data=data;
        
        }
        
  
  
    );
    }
    else{
    this.service.getDeptsearch(this.search).subscribe(
      (data)=>{console.log(data);
        this.data=data;
        
      
      }
      


  );}
    }


}
