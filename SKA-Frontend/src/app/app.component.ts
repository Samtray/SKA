import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SKA-Frontend';

  esconderTarjetas: boolean = true;

  hideCards(event: boolean){
    this.esconderTarjetas = event;
  }
}
