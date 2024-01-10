import {Product} from "./product.model";
import {Cart} from "./cart.model";

export class CartItem {
  private id: bigint;
  private cart: Cart;
  private product: Product;
  private quantity: number;

  constructor(id: bigint, cart: Cart, product: Product, quantity: number) {
    this.id = id;
    this.cart = cart;
    this.product = product;
    this.quantity = quantity;
  }

  get _id(): bigint {
    return this.id;
  }

  set _id(value: bigint) {
    this.id = value;
  }

  get _cart(): Cart {
    return this.cart;
  }

  set _cart(value: Cart) {
    this.cart = value;
  }

  get _product(): Product {
    return this.product;
  }

  set _product(value: Product) {
    this.product = value;
  }

  get _quantity(): number {
    return this.quantity;
  }

  set _quantity(value: number) {
    this.quantity = value;
  }
}
