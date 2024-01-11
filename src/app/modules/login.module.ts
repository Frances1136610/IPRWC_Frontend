import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/screens/login/login.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, MatDividerModule]
})
export class LoginModule {}
