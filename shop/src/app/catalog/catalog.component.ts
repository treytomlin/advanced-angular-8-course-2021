import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  masterCatalog:Product[] = []
  displayCatalog:Product[] = []

  constructor(private catalogSvc:CatalogService) { }

  ngOnInit() {
    this.masterCatalog = this.catalogSvc.getProducts()
    this.displayCatalog = this.masterCatalog
  }

}
