import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    SidebarModule
  ],
  exports: [
    CarouselModule,
    ButtonModule,
    SidebarModule
  ]
})
export class PrimengModule { }
