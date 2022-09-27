import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    SidebarModule,
    TabViewModule,
    PanelModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule
  ],
  exports: [
    CarouselModule,
    ButtonModule,
    SidebarModule,
    TabViewModule,
    PanelModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule
  ]
})
export class PrimengModule { }
