import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { signedupUserUrl } from '../constants/api';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit, OnDestroy{
  
  userdetails : string[] = [];

  constructor(private http: HttpClient) { }

  subscription: Subscription

  ngOnInit() {
  }

  loginService() {
    this.subscription = this.http.get<any>(signedupUserUrl)
      .subscribe(res=>{
        const usr = res.find((a:any)=>{
          this.userdetails.push(a.user)
        });
      })
    }

    set setUserDetails(val: string[]){
      this.userdetails = val;
    }
  
    get getUserDetails():string[]{
      return this.userdetails;
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }

}
