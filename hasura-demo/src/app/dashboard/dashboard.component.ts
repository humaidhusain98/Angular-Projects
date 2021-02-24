import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.auth.signOut();
    this.router.navigate(['\login']);
  }

}
