import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-laboral',
  templateUrl: './informacion-laboral.component.html',
  styleUrls: ['./informacion-laboral.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionLaboralComponent implements OnInit {

  trabaja: boolean = false;
  trabajoRelacionado: boolean = false;
  empresaNombre!: string;
  empresaDomicilo!: string;
  empresaTelefono!: string;
  empresaPuesto!: string;
  empresaDepartamento!: string;

  constructor() { }

  ngOnInit(): void {
  }

  checkCheckbox(){
    if (this.trabaja == false && this.trabajoRelacionado == true){
      this.trabajoRelacionado = false;
    }
  }

}
