import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  data:Array<any>;
  title="Doctors";
  headers=["id","name","age","gender"]
  search:string='';
  
  
  
  constructor(private http:HttpClient,private service:RegistrationService) { 
    
    this.data=new Array<any>();
    
    this.service.getDoctors().subscribe(
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
      this.service.getDoctors().subscribe(
        (data)=>{console.log(data);
          this.data=data;
        
        }
        
  
  
    );
    }
    else{
    this.service.getDocsearch(this.search).subscribe(
      (data)=>{console.log(data);
        this.data=data;
        
      
      }
      


  );}
    }

}
