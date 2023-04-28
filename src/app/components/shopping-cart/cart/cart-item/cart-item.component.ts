import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component';
// import {RefreshComponent} from 'src/app/components/shared/reusable/refresh/refresh.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;
  prodId = '';

  constructor(
    private cartService: CartService,
    private cartComponent: CartComponent,
    // private refreshComponent : RefreshComponent
  ) { }

  ngOnInit() {
    // this.removeCartItems(this.prodId); 
  }

  // removeCartItems(prodId: any) {
  //   this.cartService.deleteCartItems(prodId);
  // }
}
