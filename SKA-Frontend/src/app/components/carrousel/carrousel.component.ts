import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  alumno = alumnos
  constructor() { }

  ngOnInit(): void {

  }

}
const alumnos =
  [
    {
      name: "Alcaraz Ibarra Ahmed Fabian",
      img: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      name: "Lozano Almanza Miguel Angel",
      img: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Castellanos Salgado Samuel Antonio ",
      img: "https://randomuser.me/api/portraits/men/10.jpg"
    }

  ]

