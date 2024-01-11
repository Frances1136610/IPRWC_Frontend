import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from 'src/app/screens/cart/cart.component';
import { CartService } from '../services/cart.service';
import {NavigationModule} from "./navigation.module";

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, FormsModule, NavigationModule],
  providers: [CartService],
})
export class CartModule {}
