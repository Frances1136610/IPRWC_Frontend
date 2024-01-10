import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';

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
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  fakeDeliveryTime(): string {
    return '2-3 business days';
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
  }
}
