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

  constructor() { }

  ngOnInit(): void {
  }

}
