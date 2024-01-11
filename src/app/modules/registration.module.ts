import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import {RegistrationComponent} from "../screens/registration/registration.component";

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, ReactiveFormsModule, MatDividerModule]
})
export class RegistrationModule {}
