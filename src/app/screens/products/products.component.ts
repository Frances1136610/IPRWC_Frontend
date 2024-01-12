import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import {MatSnackBar, MatSnackBarRef, TextOnlySnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../services/user-service";

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
    private cartService: CartService,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productsService.setProducts([]);
    this.productsSub = this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    if (typeof!(this.userService.getUser()) === 'object') {
      this.showError();
    } else {
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

  showError(): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open("Please login", 'Oh no..', {
      duration: 2000,
      horizontalPosition: 'right'
    });
  }
}
