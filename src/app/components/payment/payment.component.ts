import { Component, Input, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit{
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  // @Input() cartTotal : any
  // cartTotal : any

  cartTotal = this.cartService.getCartTotal;

}
