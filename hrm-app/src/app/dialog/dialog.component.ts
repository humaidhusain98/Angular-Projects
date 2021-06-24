import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder ,Validators} from '@angular/forms';
import { EmployeeAPIService } from '../employee-api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form:FormGroup;
  
  constructor(private fb:FormBuilder,private empServ:EmployeeAPIService) { 
    this.form = this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required]],
      mobile:['',[Validators.required]],
      designation:['',[Validators.required]],
      imageUrl:['',[Validators.required]],
      role:[2,[Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  submit(){
    console.log("Form successfully submitted");
    this.empServ.addUser(this.form.value).subscribe(()=>{
      console.log("Added User Succesfully!!");
    })
    
  }

  

}
