import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../models/cart-item';
import { paymentUrl } from '../constants/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class PaymentService implements OnInit, OnDestroy {
  cartTotal: any;
  postId: any;

  subscription : Subscription

  ngOnInit() {

  }
  cartTotals = [];
  constructor(private http: HttpClient) { }
  

  addCartTotal(cartTotal: any){
    const body = { cartTotal: cartTotal };
    this.subscription = this.http.put<any>(paymentUrl + '/'+ 1, body)
    .subscribe(data => this.postId = data.id);
  }

  getCartTotal(){
    this.http.get<any>(paymentUrl).subscribe(data => {
        this.cartTotals = data})
        const object = this.cartTotals.find(obj => obj.id === 1);
        this.cartTotal = 
        console.log(object)
    //     // console.log(this.cartTotals)
    // })        
   
    // if(this.cartTotals.length!==0){
    //   for(let i=1;i<=this.cartTotals.length;i++){
    //     this.http.delete(paymentUrl + '/'+ i).subscribe((res:any)=>{
    //       // window.location.reload();
    //     })
    //   }
    // }

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
