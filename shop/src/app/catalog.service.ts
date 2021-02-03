import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  catalog: Product[] = [
    {
      sku: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      price: 950,
      rating: 3.5,
      image: "assets/p1.jpg"
    },
    {
      sku: "HT-1010",
      name: "Notebook Professional 15",
      description: "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
      price: 1240.00,
      rating: 4.0,
      image: "assets/p2.jpg"
    },
    {
      sku: "HT-1001",
      name: "Notebook Basic 17",
      description: "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      price: 1105.00,
      rating: 2.5,
      image: "assets/p3.jpg"
    },
    {
      sku: "HT-1002",
      name: "Notebook Professional 17",
      description: "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
      price: 1350.00,
      rating: 4.8,
      image: "assets/p4.jpg"
    },
  ]
  
  constructor() { }

  getProducts() : Product[] {
    return this.catalog
  }
}
