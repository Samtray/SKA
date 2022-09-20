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
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlumnosComponent,
    GraficasComponent,
    TarjetasComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
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
