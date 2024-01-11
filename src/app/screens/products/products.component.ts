import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  private productsSub: Subscription | undefined;
  public products: Product[] | undefined;
  public buttonClicked = false;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsService.setProducts([]);
    this.productsSub = this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    let productDetails = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
    };

    this.cartService.addToCart(productDetails).subscribe(() => {
      this.buttonClicked = true;

      setTimeout(() => {
        this.buttonClicked = false;
      }, 1500);
    });
  }
}
