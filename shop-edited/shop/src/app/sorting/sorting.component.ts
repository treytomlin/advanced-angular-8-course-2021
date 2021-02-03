import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  constructor(private homeComponent: HomeComponent) { }

  ngOnInit() {
  }
  
  applySorting(sortType: string) {
    console.log(sortType)
    this.homeComponent.catalogComponent.applySorting(sortType)
  }
}
