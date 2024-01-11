import { Injectable } from '@angular/core';
import {map} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Product} from "../models/product.model";
import {UserService} from "./user-service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: any[] = [];
  private productId = null;

  constructor(private http: HttpClient, private userService: UserService) {
  }

  getProducts() {
    return this.http.get<any>(environment.apiKey + 'product'
    ).pipe(map(data => {
        for (let i = 0; i < data['payload'].length; i++) {
          this.products.push(new Product(data['payload'][i].id, data['payload'][i].name, data['payload'][i].description, data['payload'][i].price));
        }
        return this.products;
      }
    ));
  }

  removeProduct(id: bigint) {
    let header = new HttpHeaders({"Authorization": "Bearer " + this.userService.getJWT()});
    return this.http.delete(environment.apiKey + 'product/delete/' + id, {
      headers: header
    });
  }

  addProduct(product:Object) {
    let header = new HttpHeaders({"Authorization": "Bearer " + this.userService.getJWT()});
    return this.http.post<any>(environment.apiKey + 'product/insert', product,
      {
        headers: header
      }).pipe(map(data => {
      if (data['code'] === 'ACCEPTED') {
      } else {
        throw new Error(data['message']);
      }
    }));
  }

  setProducts(products: Product []) {
    this.products = products;
  }

  getProductId() {
    return this.http.get(environment.apiKey + 'product/id')
      .pipe(map(res => {
          // @ts-ignore
          this.productId = res['payload'];
          return this.productId;
        }
      ));
  }
}
