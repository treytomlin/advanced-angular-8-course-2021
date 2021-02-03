import { Injectable } from '@angular/core';
import { Product } from './product';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class CartItem {
  product:Product
  quantity:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userCart: CartItem[] = []
  public cartSubject = new Subject<CartItem[]>()

  constructor(private http: HttpClient) { }

  addToCart(item: CartItem) {
    this.userCart.push(item)
    this.cartSubject.next(this.userCart)
  }

  makePayment(ccData) {
    return this.http.post("/api/payment", ccData)
  }
}
