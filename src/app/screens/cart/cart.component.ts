import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private cartSub: Subscription | undefined;
  public cart: CartItem[] | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.setCart([]);
    this.cartSub = this.cartService.getCart().subscribe((data: CartItem[]) => {
      this.cart = data;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }

  calculateTotalPrice(): number {
    if (!this.cart) {
      return 0;
    }
    return this.cart.reduce((total, item) => total + item._quantity, 0);
  }

  fakeDeliveryTime(): string {
    return '2-3 business days';
  }

  updateQuantity(cartItem: CartItem): void {
    if (cartItem._quantity > 1) {
      cartItem._quantity--;
    }

    let productDetails = {
      id: cartItem._id,
      cart_id: cartItem._cart.id,
      product_id: cartItem._cart.id,
      quantity: cartItem._quantity
    }

    this.cartService.updateQuantity(productDetails).subscribe(() => {

      }
    );
  }

  removeCartItem(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem._id).subscribe(() => {
      }
    );

    // @ts-ignore
    const index: number = this.cart.indexOf(cartItem);
    // @ts-ignore
    this.cart.splice(index, 1);
  }
}
