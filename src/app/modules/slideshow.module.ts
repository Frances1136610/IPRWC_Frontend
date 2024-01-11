import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { SlideShowComponent } from 'src/app/slideshow/slideshow.component';

@NgModule({
  declarations: [SlideShowComponent],
  imports: [CommonModule, CarouselModule, WavesModule],
  exports: [SlideShowComponent],
})
export class SlideShowModule {}
