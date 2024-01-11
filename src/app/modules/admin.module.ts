import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationModule} from "./navigation.module";
import {AdminComponent} from "../screens/admin/admin.component";

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, FormsModule, NavigationModule, ReactiveFormsModule],
})
export class AdminModule {}
