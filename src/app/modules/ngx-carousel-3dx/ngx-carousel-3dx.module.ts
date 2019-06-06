import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCarousel3dComponent } from './ngx-carousel-3dx.component';
import { NgxCarousel3dSlideComponent } from './ngx-carousel-3dx-slide/ngx-carousel-3dx-slide.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxCarousel3dComponent,
    NgxCarousel3dSlideComponent
  ],
  exports: [
    NgxCarousel3dComponent,
    NgxCarousel3dSlideComponent
  ]
})
export class NgxCarousel3dModule {
}
