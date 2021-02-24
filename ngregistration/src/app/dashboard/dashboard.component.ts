import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  gotoMC(){
    this._router.navigate(['/mc']);
  }

  gotoSignIn(){

    this._router.navigate(['/signin']);


  }
  gotoDoctors(){
    this._router.navigate(['/doctors']);


  }

  gotoDept(){
    this._router.navigate(['/departments']);

  }




}
