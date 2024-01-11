import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import {AccountMenuModule} from "./account-menu.module";

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, AccountMenuModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
