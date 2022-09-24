import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  alumno = alumnos
  responsive = responsiveOptions
  displayMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  abrirMenu(){
    this.displayMenu = true;
  }
}
const alumnos =
  [
    {
      name: "Alcaraz Ibarra Ahmed Fabian",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      matricula: "0319124961"
    },
    {
      name: "Lozano Almanza Miguel Angel",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      matricula: "0319124962"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124963"
    },
    {
      name: "Castellanos Salgado Samuel Antonio ",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
      matricula: "0319124964"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124965"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124966"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124967"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124968"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124969"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124970"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124971"
    },
    {
      name: "Torrecilas Beltrán Jesús Gustavo",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      matricula: "0319124972"
    }

  ]
const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
];
