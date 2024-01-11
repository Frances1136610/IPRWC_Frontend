import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMenuComponent } from 'src/app/account-menu/account-menu.component';

@NgModule({
  declarations: [AccountMenuComponent],
  imports: [CommonModule],
  exports: [AccountMenuComponent],
})
export class AccountMenuModule {}
