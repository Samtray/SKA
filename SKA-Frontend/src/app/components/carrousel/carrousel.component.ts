import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  churro = cars
  constructor() { }

  ngOnInit(): void {

  }

}
const cars =
  [
    {
      name: "churro carro",
      img: "/assets/1.jpg"
    },
    {
      name: "febo carro",
      img: "/assets/2.jpg"
    },
    {
      name: "tavo carro",
      img: "/assets/3.jpg"
    },
    {
      name: "maik carro",
      img: "/assets/4.jpg"
    }

  ]

