
import { RegistrationService } from './../registration.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-mc',
  templateUrl: './mc.component.html',
  styleUrls: ['./mc.component.css']
})
export class McComponent implements OnInit {
  data:Array<any>;
  title="Medical-centers";
  headers=["id","name","type"]
  show:Array<boolean>=new Array();
  showdoc:Array<boolean>=new Array();
  search:string='';
  

  


  constructor(private http:HttpClient,private service:RegistrationService) { 
    this.data=new Array<any>();
    
    this.service.getmc().subscribe(
      (data)=>{console.log(data);
        this.data=data;
        
      
      }
      


  );
  


  }

  

  

  ngOnInit(): void {
  }

  getMedDepart(id:number){ 
    this.show[id]=!this.show[id];

    

    }

  getSearch(){
    this.service.getmcsearch(this.search).subscribe(
      (data)=>{console.log(data);
        this.data=data;
        
      
      }
      


  );



  }


  getMedDocs(id:number){ 
    this.showdoc[id]=!this.showdoc[id];

    

    }
 

}
