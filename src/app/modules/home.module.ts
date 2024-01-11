import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/screens/home/home.component';
import {SlideShowModule} from "./slideshow.module";
import {NavigationModule} from "./navigation.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SlideShowModule, NavigationModule],
  exports: []
})
export class HomeModule {}
