import { Injectable } from '@angular/core';
import {map} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: any[] = [];

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<any>(environment.apiKey + 'product'
    ).pipe(map(data => {
        for (let i = 0; i < data['payload'].length; i++) {
          this.products.push(new Product(data['payload'][i].id, data['payload'][i].name, data['payload'][i].description));
        }
        return this.products;
      }
    ));
  }

  setProducts(products: Product []) {
    this.products = products;
  }
}
//
