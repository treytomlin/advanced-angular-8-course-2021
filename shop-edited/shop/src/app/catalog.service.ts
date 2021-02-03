import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of, interval, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, retryWhen, flatMap } from 'rxjs/operators';
import { retry_get } from './retry_get';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  cachedCatalog?: Product[]
 
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if (this.cachedCatalog) {
      console.log("Cache Hit")
      return of(this.cachedCatalog)
    }
    return this.http.get<Product[]>("/api/catalog")
      .pipe(
        tap(catalog => this.cachedCatalog = catalog),
        retry_get<Product[]>()
      )
  }

  search(query: string): Observable<Product[]> {
    return this.http.get<Product[]>("/api/catalog/search/" + encodeURI(query))
  }
}
