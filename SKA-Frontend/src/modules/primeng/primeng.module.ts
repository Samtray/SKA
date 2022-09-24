import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    SidebarModule,
    
  ],
  exports: [
    CarouselModule,
    ButtonModule,
    SidebarModule,
    ChartModule
  ]
})
export class PrimengModule { }
