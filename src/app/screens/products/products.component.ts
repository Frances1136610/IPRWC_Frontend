import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any[] = [
    { id: 1, name: 'Product 1', price: 20.99, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 15.49, description: 'Description for Product 2' },
  ];

  constructor() { }
}

