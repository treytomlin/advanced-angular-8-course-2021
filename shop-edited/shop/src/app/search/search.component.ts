import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import {fromEvent, Subscription } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  subscription: Subscription

  constructor(private homeComponent: HomeComponent) { }

  ngOnInit() {
    this.subscription = fromEvent(this.searchElement.nativeElement, "input")
    .pipe(debounceTime(1000))
    .subscribe(_ => this.applySearch(
      this.searchElement.nativeElement.value))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  @ViewChild("searchText", {static:true})
  searchElement: ElementRef

  applySearch(txt: string) {
    console.log(txt)
    this.homeComponent.catalogComponent.applySearch(txt)
  }
}
