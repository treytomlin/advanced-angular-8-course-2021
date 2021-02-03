import { Component, OnInit } from '@angular/core';
import { AccountService, Order } from '../account.service';

export class Order {
  date: string
  total: number
  status: string
}

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
