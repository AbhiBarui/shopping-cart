import { Component, OnInit,Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';
import { Router} from '@angular/router'
// import {RefreshComponent} from 'src/app/components/shared/reusable/refresh/refresh.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // @Input() cartItem: any;
  cartItems: CartItem[] = [];
  cartTotal = 0
  prodId = '';

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private paymentService: PaymentService,
    private router:Router
    // private refreshComponent : RefreshComponent
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
    // this.removeCartItems(this.prodId);
  }

  handleSubscription() {
    product : Product;
    this.msg.getMsg().subscribe((product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  async removeCartItems(prodId: any) {
    this.cartService.deleteCartItems(prodId);
    await new Promise(f => setTimeout(f, 500));
    this.loadCartItems();
  }
  checkout(){
    this.paymentService.addCartTotal(this.cartTotal);
    this.router.navigate(['payment']);
    this.cartService.setCartTotal = this.cartTotal;
  }
}