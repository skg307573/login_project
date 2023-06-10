import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/common/service.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  submitted:boolean=false;
  fieldType:string="password";
  loginForm: FormGroup = new FormGroup({
    'email':new FormControl('', [Validators.required, Validators.email]),
    'password':new FormControl('', [Validators.required,Validators.pattern("^[0-9]{8}$")])
  })
  constructor(private router:Router, private service:ServiceService){

  }

  get login(){
    return this.loginForm.controls;
  }
  
  loginFormSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
    let {email, password}=this.loginForm.getRawValue();
    if(email==environment.credential.email && password==environment.credential.password){
      localStorage.setItem('UserDetails', this.service.encrypt(JSON.stringify({email, password})))
      this.submitted=false;
      this.service.success("login successfully !")
      this.router.navigate(['Dashboard']);
    }else{
      this.service.warning("you are not authorized person to access this service !")
    }
    }else{
      this.service.error("Please input required fields !")
    }
  }
  showPassword(){
  this.fieldType=this.fieldType=='password'?'text':'password';
  }
  ngOnInit(){
  if(localStorage.getItem('UserDetails')){
    this.router.navigate(['/Dashboard'])
  }
  }
}
