import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
