import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { catalogosInterface } from '../../carrousel/carrousel.component';

@Component({
  selector: 'app-informacion-domicilio',
  templateUrl: './informacion-domicilio.component.html',
  styleUrls: ['./informacion-domicilio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionDomicilioComponent implements OnInit {

  @Input() catalogos!: catalogosInterface;
  @Input() alumno!: any;

  calle: any;
  numero: any;
  colonia: any;
  municipio: any;

  constructor() { }

  ngOnInit(): void {
  }

}
