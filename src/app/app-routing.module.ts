import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./screens/login/login.component";
import {RegistrationComponent} from "./screens/registration/registration.component";
import {HomeComponent} from "./screens/home/home.component";
import {CartComponent} from "./screens/cart/cart.component";
import {ProductsComponent} from "./screens/products/products.component";
import {AdminComponent} from "./screens/admin/admin.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
