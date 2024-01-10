import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  private productsSub: Subscription | undefined;
  public products: any[] | undefined;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.setProducts([]);
    this.productsSub = this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
    console.log('products ' + this.products);
  }
}

