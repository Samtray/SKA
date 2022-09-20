import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
