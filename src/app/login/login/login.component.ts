import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private rout:Router) { }

  loginForm!:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      username:[''],
      password:[''],
    })
  }
  loginCall()
  {
    //re login
    if((this.loginForm.get('username')?.value==="re") &&(this.loginForm.get('password')?.value==="re"))
    {
      this.rout.navigate(['dashboardEnquiry'])
    }
    // oe login
    if(this.loginForm.get('username')?.value==="oe" && this.loginForm.get('password')?.value==="oe")
    {
      this.rout.navigate(['dashboardOE'])
    };
    //Cm login
    if(this.loginForm.get('username')?.value==="cm" && this.loginForm.get('password')?.value==="cm")
    {
      this.rout.navigate(['CMdashBoard'])
    }
  }

}
