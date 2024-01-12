import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {HttpClientModule} from "@angular/common/http";
import { ProductsModule } from "src/app/modules/product.module";
import {CartModule} from "./modules/cart.module";
import {HomeModule} from "./modules/home.module";
import {SlideShowModule} from "./modules/slideshow.module";
import {RegistrationModule} from "./modules/registration.module";
import {LoginModule} from "./modules/login.module";
import {AdminModule} from "./modules/admin.module";
import {AccountMenuModule} from "./modules/account-menu.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    ProductsModule,
    CartModule,
    HomeModule,
    SlideShowModule,
    RegistrationModule,
    LoginModule,
    AdminModule,
    AccountMenuModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
