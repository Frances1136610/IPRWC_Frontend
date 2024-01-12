import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Subscription} from "rxjs";
import {Product} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  private productsSub: Subscription | undefined;
  public products: Product[] | undefined;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    this.productsService.setProducts([]);
    // @ts-ignore
    this.productsSub = this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
