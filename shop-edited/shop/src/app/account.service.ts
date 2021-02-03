import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { AuthService } from './auth.service';

export class Order {
  date: string
  total: number
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private authSvc: AuthService) { }

  getOrderHistory(): Observable<Order[]> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.authSvc.jwtToken
    })

    return this.http.get<Order[]>(
      "/api/account/order", { 'headers': headers}
    )
  }
}
