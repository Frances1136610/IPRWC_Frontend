import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../models/product.model";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  public products: Product[] | undefined;
  private productsSub: Subscription | undefined;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl('')
  });
  // @ts-ignore
  private newProductId: number;

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.productsService.setProducts([]);
    this.productsSub = this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProduct() {
    if (this.form.valid) {
      this.productsSub = this.productsService.getProductId().subscribe(data => {
        // @ts-ignore
        this.newProductId = data;
        const productDetails = {
          id: this.newProductId,
          name: this.form.value.name,
          description: this.form.value.description,
          price: this.form.value.price,
          image: this.form.value.image
        };

        console.log(productDetails);
        this.productsService.addProduct(productDetails).subscribe(() => {
        });
        this.form.reset();
        // @ts-ignore
        this.productsSub.unsubscribe();
      });
    }
  }

  removeProduct(product: Product){
    this.productsService.removeProduct(product.id).subscribe(() => {
      }
    );
    // @ts-ignore
    const index: number = this.products.indexOf(product);
    // @ts-ignore
    this.products.splice(index, 1);
  }
}
