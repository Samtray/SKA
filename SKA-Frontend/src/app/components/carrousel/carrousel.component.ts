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
      img: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      name: "febo carro",
      img: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
      name: "tavo carro",
      img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "maik carro",
      img: "https://randomuser.me/api/portraits/men/10.jpg"
    }

  ]

