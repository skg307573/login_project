import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/common/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  avatar: string | undefined;
  auth:any;
 constructor(private router:Router, private service:ServiceService){

 }

 logout(){
  this.service.logout();
  this.service.success("logout successfully !")
  this.router.navigate(['/login'])
 }
 ngOnInit(): void {
   let data=this.service.decrypt(localStorage.getItem('UserDetails'));
   if(data){
    this.auth= JSON.parse(data);
   }
 }
}
