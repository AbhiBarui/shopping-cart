import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
    model: any = {}
    loginForm:FormGroup|any;
    signedupUser: any;
    userDetails: any[];
  
    constructor(private builder:FormBuilder, private http: HttpClient, private router: Router,private loginService: LoginService) { }
  
    ngOnInit() {
      this.loginForm = this.builder.group({
        username:[''],
        password:['']
      })
    }
  
  // login() {
  //   this.http.get<any>(signedupUserUrl)
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
  //     });
  //     if(user){
  //       this.loginForm.reset;
  //       this.router.navigate(['shop']);
  //     }else{
  //       alert("User not found!")
  //     }
  //   }),(err: any)=>{
  //     alert("Something went wrong !!")
  //   }
  // }

  async login() {

    this.loginService.loginService();
    await new Promise(f => setTimeout(f, 500));
    this.loginService.setUserDetails;
      this.userDetails = this.loginService.getUserDetails
      let user = false
      for (let i=0; i<this.userDetails.length; i++) {
        if (this.userDetails[i].username === this.loginForm.value.username && this.userDetails[i].password === this.loginForm.value.password) {
          user = true
          break;
        }
      }

      if(user){
        this.loginForm.reset;
        this.router.navigate(['shop']);
      }else{
        alert("User not found!")
      }
      (err: any)=>{
        alert("Something went wrong !!")
      }
    }
}
