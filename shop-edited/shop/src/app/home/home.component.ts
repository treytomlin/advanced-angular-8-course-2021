import { Component, OnInit, ViewChild } from '@angular/core';
import { MainBodyComponent } from '../main-body/main-body.component';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  catalogComponent: CatalogComponent
}
