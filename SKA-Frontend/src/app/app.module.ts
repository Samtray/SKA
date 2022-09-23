import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material/material.module';
import { PrimengModule } from 'src/modules/primeng/primeng.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlumnosComponent,
    GraficasComponent,
    TarjetasComponent,
    WrapperComponent,
    CarrouselComponent
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    AlumnosComponent,
    GraficasComponent,
    TarjetasComponent,
    WrapperComponent
  ]
})
export class AppModule { }
