import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material/material.module';
import { PrimengModule } from 'src/modules/primeng/primeng.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FormsModule } from '@angular/forms';
import { InformacionPersonalComponent } from './components/form-fields/informacion-personal/informacion-personal.component';
import { InformacionDomicilioComponent } from './components/form-fields/informacion-domicilio/informacion-domicilio.component';
import { InformacionContactoComponent } from './components/form-fields/informacion-contacto/informacion-contacto.component';
import { InformacionFamiliaresComponent } from './components/form-fields/informacion-familiares/informacion-familiares.component';
import { InformacionLaboralComponent } from './components/form-fields/informacion-laboral/informacion-laboral.component';
import { InformacionEconomicaComponent } from './components/form-fields/informacion-economica/informacion-economica.component';
import { InformacionEscolarComponent } from './components/form-fields/informacion-escolar/informacion-escolar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraficasComponent,
    TarjetasComponent,
    WrapperComponent,
    CarrouselComponent,
    InformacionPersonalComponent,
    InformacionDomicilioComponent,
    InformacionContactoComponent,
    InformacionFamiliaresComponent,
    InformacionLaboralComponent,
    InformacionEconomicaComponent,
    InformacionEscolarComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    GraficasComponent,
    TarjetasComponent,
    WrapperComponent
  ]
})
export class AppModule { }
