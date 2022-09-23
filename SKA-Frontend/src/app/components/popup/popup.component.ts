import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
