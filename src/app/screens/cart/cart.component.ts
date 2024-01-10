import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartSub: Subscription | undefined;
  public cart: any[] | undefined;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.setCart([]);
    this.cartSub = this.cartService.getCart().subscribe(data => {
      this.cart = data;
    });
    console.log('products ' + this.cart);
  }
}
