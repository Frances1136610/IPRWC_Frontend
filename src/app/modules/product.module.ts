import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from 'src/app/screens/products/products.component';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user-service';
import { NavigationModule } from 'src/app/modules/navigation.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, BrowserAnimationsModule, NavigationModule],
  providers: [ProductsService, CartService, UserService],
})
export class ProductsModule {}
