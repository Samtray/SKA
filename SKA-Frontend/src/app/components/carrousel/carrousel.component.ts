import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface catalogo {
  id: any
  descripcion: any
}

export interface catalogosInterface {
  municipio: catalogo[],
  genero: catalogo[],
  estadoCivil: catalogo[],
  razonTrabaja: catalogo[],
  viveCon: catalogo[],
  vivienda: catalogo[],
  transporte: catalogo[],
  apoyoEconomico: catalogo[],
  ingresosFamiliares: catalogo[],
  tipoBachillerato: catalogo[],
  entidadFederativa: catalogo[],
}

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @Output() esconderTarjetas = new EventEmitter();

  alumno = alumnos;
  responsive = responsiveOptions;
  displayMenu: boolean = false;
  selectedIndex: any = 0;

  catalogos = catalogosFeik;

  constructor() { }

  ngOnInit(): void {
  }

  abrirMenu() {
    this.displayMenu = true;
    this.esconderTarjetas.emit(false);
  }

  cerrarMenu() {
    this.displayMenu = false;
    this.esconderTarjetas.emit(true);
  }

  setSelected(matricula: any) {
    this.selectedIndex = matricula;
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
    numVisible: 5,
    numScroll: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '560px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '375px',
    numVisible: 2,
    numScroll: 2
  }
];

const catalogosFeik: catalogosInterface = {
  municipio: [
    {
      id: "MN-RST",
      descripcion: "Rosarito"
    },
    {
      id: "MN-TC",
      descripcion: "Tecate"
    },
    {
      id: "MN-TJ",
      descripcion: "Tijuana"
    }
  ],
  genero: [
    {
      id: "GN-F",
      descripcion: "Femenino"
    },
    {
      id: "GN-M",
      descripcion: "Masculino"
    },
    {
      id: "GN-OND",
      descripcion: "Otro/No definido"
    }
  ],
  estadoCivil: [
    {
      id: "EC-CSD",
      descripcion: "Casado(a)"
    },
    {
      id: "EC-DVR",
      descripcion: "Divorciado(a)"
    },
    {
      id: "EC-SLT",
      descripcion: "Soltero(a)"
    },
    {
      id: "EC-UL",
      descripcion: "Unión Libre"
    }
  ],
  razonTrabaja: [
    {
      id: "RT-AEF",
      descripcion: "Apoyar Económicamente a la Familia"
    },
    {
      id: "RT-ATF",
      descripcion: "Apoyar Totalmente a la Familia"
    },
    {
      id: "RT-SGI",
      descripcion: "Solventar Algunos Gastos Personales"
    },
    {
      id: "RT-ST",
      descripcion: "Sostenerme Totalmente"
    }
  ],
  viveCon: [
    {
      id: "VC-AP",
      descripcion: "Ambos Padres"
    },
    {
      id: "VC-UP",
      descripcion: "Uno de los Padres"
    },
    {
      id: "VC-PRJ",
      descripcion: "Pareja"
    },
    {
      id: "VC-SL",
      descripcion: "Solo(a)"
    },
    {
      id: "VC-OF",
      descripcion: "Otro Familiar"
    },
    {
      id: "VC-AMG",
      descripcion: "Amigos"
    }
  ],
  vivienda: [
    {
      id: "VD-PRP",
      descripcion: "Propia"
    },
    {
      id: "VD-RNT",
      descripcion: "Rentada"
    },
    {
      id: "VD-PRS",
      descripcion: "Prestada"
    }
  ],
  transporte: [
    {
      id: "TR-PRP",
      descripcion: "Propio"
    },
    {
      id: "TR-PBL",
      descripcion: "Público"
    }
  ],
  apoyoEconomico: [
    {
      id: "AE-PDR",
      descripcion: "Padre"
    },
    {
      id: "AE-MDR",
      descripcion: "Madre"
    },
    {
      id: "AE-HRM",
      descripcion: "Hermano(a)"
    },
    {
      id: "AE-CNY",
      descripcion: "Cónyuge"
    },
    {
      id: "AE-OF",
      descripcion: "Otro Familiar"
    },
    {
      id: "AE-YO",
      descripcion: "Yo"
    }
  ],
  ingresosFamiliares: [
    {
      id: "IF-ME5",
      descripcion: "Menos de $5,000"
    },
    {
      id: "IF-510",
      descripcion: "$5,000 A $10,000"
    },
    {
      id: "IF-1015",
      descripcion: "$10,000 A $15,000"
    },
    {
      id: "IF-MA15",
      descripcion: "Más de $15,000"
    }
  ],
  tipoBachillerato: [
    {
      id: "TB-PBL",
      descripcion: "Escuela Pública (Oficial de Gobierno)"
    },
    {
      id: "TB-PRV",
      descripcion: "Privada o Particular"
    }
  ],
  entidadFederativa: [
    {
      id: "AGC",
      descripcion: "Aguascalientes"
    },
    {
      id: "BC",
      descripcion: "Baja California"
    }
  ]
}
