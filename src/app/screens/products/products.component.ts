import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart-item.model";
import {Product} from "../../models/product.model";
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  private productsSub: Subscription | undefined;
  public products: any[] | undefined;

  constructor(private productsService: ProductsService, private cartService: CartService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.productsService.setProducts([]);
    this.productsSub = this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
    console.log('products ' + this.products);
  }

  addToCart(product: Product) {
    let productDetails = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price
    }

    this.cartService.addToCart(product).subscribe(() => {
    });
  }
}

