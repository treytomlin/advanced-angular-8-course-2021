import { Injectable } from '@angular/core';
import { Product } from './product';

export class CartItem {
  product:Product
  quantity:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userCart: CartItem[] = []

  constructor() { }

  addToCart(item: CartItem) {
    this.userCart.push(item)
  }
}
