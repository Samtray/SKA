import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    SidebarModule,
    TabViewModule
  ],
  exports: [
    CarouselModule,
    ButtonModule,
    SidebarModule,
    TabViewModule
  ]
})
export class PrimengModule { }
