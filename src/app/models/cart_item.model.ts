import {Product} from "./product.model";
import {Cart} from "./cart.model";

export class CartItem {
  private _id: bigint;
  private _cart: Cart;
  private _product: Product;
  private _quantity: bigint;

  constructor(id: bigint, cart: Cart, product: Product, quantity: bigint) {
    this._id = id;
    this._cart = cart;
    this._product = product;
    this._quantity = quantity;
  }

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  get cart(): Cart {
    return this._cart;
  }

  set cart(value: Cart) {
    this._cart = value;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get quantity(): bigint {
    return this._quantity;
  }

  set quantity(value: bigint) {
    this._quantity = value;
  }
}
