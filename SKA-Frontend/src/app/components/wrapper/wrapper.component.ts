import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
