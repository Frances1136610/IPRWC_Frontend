import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user-service";
import {environment} from "../../environment/environment";
import {CartItem} from "../models/cart-item.model";
import {Product} from "../models/product.model";
import {Cart} from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient, private userService: UserService) {
  }

  getCart() {
    let header = new HttpHeaders({"Authorization": "Bearer " + this.userService.getJWT()});
    return this.http.get<any>(environment.apiKey + 'cartitems/' + this.userService.getUser()._id,
      {
        headers: header
      }).pipe(map(data => {
      for (let i = 0; i < data['payload'].length; i++) {
          this.cartItems.push(new CartItem(data['payload'][i].id, data['payload'][i].cart, data['payload'][i].product, data['payload'][i].quantity));
        }
        return this.cartItems;
      }
    ));
  }

  addToCart(product: Object) {
    let header = new HttpHeaders({"Authorization": "Bearer " + this.userService.getJWT()});
    return this.http.post<any>(environment.apiKey + 'cartitems/' + this.userService.getUser()._id + '/insert', product,
      {
        headers: header
      }).pipe(map(data => {
        if (data['code'] === 'ACCEPTED') {
        } else {
          throw new Error(data['message']);
        }
      }));
  }

  setCart(cartItems: CartItem []) {
    this.cartItems = cartItems;
  }}
