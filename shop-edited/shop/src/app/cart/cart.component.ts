import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  itemCount: number = 0
  subscription: Subscription

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.cartSubject.subscribe(cart =>
      this.itemCount = cart.length)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  getCart() {
    return this.cartService.userCart
  }


}
