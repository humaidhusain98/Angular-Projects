import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { QrmodalComponent } from '../qrmodal/qrmodal.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  menu:string[];
  show:boolean;
  constructor(public dialog: MatDialog) {
    this.show=false;
    let data=["QR Code","New Code","Some Option"];
    this.menu=data;
   }

  ngOnInit(): void {
    this.show=false;
  }

  click(){

    this.show=!this.show;
  }

  openQR(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    this.dialog.open(QrmodalComponent, dialogConfig);
    this.click();
    
  }

 
}
