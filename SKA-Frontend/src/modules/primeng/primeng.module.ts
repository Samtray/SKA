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
import { CheckboxModule } from 'primeng/checkbox';

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
    InputTextModule,
    CheckboxModule
  ],
  exports: [
    CarouselModule,
    ButtonModule,
    SidebarModule,
    TabViewModule,
    PanelModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    CheckboxModule
  ]
})
export class PrimengModule { }
