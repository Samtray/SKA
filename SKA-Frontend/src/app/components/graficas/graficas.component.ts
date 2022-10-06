import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {CarouselModule} from 'primeng/carousel';
import { IGrupo } from 'src/app/models/grupo';
import { ApiService } from 'src/app/services/api.service';
type EChartsOption = echarts.EChartsOption
var colorPalette = ['#5B8E7D', '#F4E285','#BC4B51'];
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GraficasComponent implements OnInit {

  @Input() set grupo(value: IGrupo) {
    this.estadisticas = value?.estadisticas
  }

  estadisticas: any;
  ingresosChart!: EChartsOption;
  laborChart!:EChartsOption;
  razonTrabajaChart!: EChartsOption;
  generoViveChart!: EChartsOption;
  viveconChart!: EChartsOption;
  bachillerChart!:EChartsOption;
  bachilleratosChart!: EChartsOption;
  promediosChart!:EChartsOption;
  gradeChart!: EChartsOption;

  datosPersonales:any;
  datosEscolares:any;
  datosLaborales:any;

  cargando:boolean=true;



  constructor( private ApiService:ApiService) { }

  ngOnInit(): void {
    this.iniciarGraficas();

  }

  iniciarGraficas(){

  this.ApiService.getGrupo().subscribe(data =>{
      this.estadisticas = data;
      this.chartIngresos(this.estadisticas.estadisticas.datosPersonales.ingresosFamiliares);
      this.chartTrabajo(this.estadisticas.estadisticas.datosLaborales.trabajan, this.estadisticas.estadisticas.datosLaborales.trabajoRelacionadoEstudios);
      this.trabajoRazonChart(this.estadisticas.estadisticas.datosLaborales.razonTrabaja);
      this.generoCivilChart(this.estadisticas.estadisticas.datosPersonales.genero,this.estadisticas.estadisticas.datosPersonales.estadoCivil);
      this.habitarChart(this.estadisticas.estadisticas.datosPersonales.viveCon);
      this.TipoPrepasChart(this.estadisticas.estadisticas.datosEscolares.tipoBachilleraro);
      this.prepasChart(this.estadisticas.estadisticas.datosEscolares.bachilleratos);
      this.promedioChart(this.estadisticas.estadisticas.promedios.bachillerato,this.estadisticas.estadisticas.promedios.tsu,this.estadisticas.estadisticas.promedios.ingenieria);
      this.calificacionesChart(this.estadisticas.estadisticas.promedios.tsu,this.estadisticas.estadisticas.promedios.ingenieria);
    });
  }

  chartIngresos(object: any[]){
    let descripciones: any = [];
    let valores: any = [];
    object.forEach(obj => {
      descripciones.push(obj.descripcion)
      valores.push(obj.cantidad)
    });

    this.ingresosChart = {
      title: {
        text: 'Datos Personales',
        subtext: 'Ingresos Familiares',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        confine: true
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: descripciones,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Cantidad',
          type: 'bar',
          barWidth: '60%',
          data: [{value: valores[0],itemStyle: {color: '#5b8e7d'}},{value:valores[1],itemStyle: {color: '#bc4b51'}},{value:valores[2],itemStyle: {color: '#f4a259'}},{value:valores[3],itemStyle: {color: '#f4e285'}}]
        }
      ]
    }
  }

  chartTrabajo(object:any,object2:any){
    let siTrabaja = object.si;
    let noTrabaja = object.no;

    let noRelacionado = object2.no;
    let relacionado = object2.si;

    this.laborChart = {
      title: {
        text: 'Datos Laborales',
        subtext: 'Trabajo y Relación de trabajo',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        confine: true
      },
      /*legend: {
        data: [
          'Masculino',
          'Femenino',
          'Soltero(a)',
          'Unión Libre',
        ],

      },*/
      series: [
        {
          name: 'Trabajan',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 14
          },
          labelLine: {
            show: false
          },
          data: [
            { value: siTrabaja, name: 'Si', selected: true  },
            { value: noTrabaja, name: 'No',}
          ],
          color:colorPalette
        },
        {
          name: 'Relacionado con Estudios',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30
          },
          label: {
            rich: {
              a: {
                color: '#BC4B51',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#BC4B51',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                backgroundColor: '#BC4B51',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          },
          data: [
            { value: relacionado, name: 'Si' },
            { value: noRelacionado, name: 'No' },

          ]
        }
      ]
    }
  }

  trabajoRazonChart(object: any[]){
    let descripciones: any = [];
    let valores: any = [];
    object.forEach(obj => {
      descripciones.push(obj.descripcion)
      valores.push(obj.cantidad)
    });

    this.razonTrabajaChart = {
      title: {
        text: 'Datos Laborales',
        subtext: 'Razón de Trabajo',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        confine: true
      },
      grid: {
        left: '10%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: descripciones,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            rotate: 10 ,
          },
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Cantidad',
          type: 'bar',
          barWidth: '60%',
          data: [{value:valores[0],itemStyle: {color: '#5b8e7d'}},{value:valores[1],itemStyle: {color: '#bc4b51'}},{value:valores[2],itemStyle: {color: '#f4a259'}},{value:valores[3],itemStyle: {color: '#f4e285'}}]
        }
      ]
    }
  }


  generoCivilChart(object: any[],object2: any[]) {
    let descripciones: any = [];
    let valores: any = [];
    object.forEach(obj => {
      descripciones.push(obj.descripcion)
      valores.push(obj.cantidad)
    });
    let descripciones2: any = [];
    let valores2: any = [];
    object2.forEach(obj => {
      descripciones2.push(obj.descripcion)
      valores2.push(obj.cantidad)
    });

    this.generoViveChart = {
      title: {
        text: 'Datos Personales',
        subtext: 'Genero y estado civil',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        confine: true
      },
      /*legend: {
        data: [
          'Masculino',
          'Femenino',
          'Soltero(a)',
          'Unión Libre',
        ],
        orient: 'vertical',
        left: 'left',
      },*/
      series: [
        {
          name: 'Genero',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 14
          },
          labelLine: {
            show: false
          },
          data: [
            { value: valores[0], name: descripciones[0] },
            { value: valores[1], name: descripciones[1], selected: true }
          ],
          color:colorPalette
        },
        {
          name: 'Estado Civil',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30
          },
          label: {
            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          },
          data: [
            { value: valores2[0], name: descripciones2[0] },
            { value: valores2[1], name: descripciones2[1] },

          ],
          color:colorPalette
        }
      ]
    };
  }

  habitarChart(object: any[]){
    let descripciones: any = [];
    let valores: any = [];
    object.forEach(obj => {
      descripciones.push(obj.descripcion)
      valores.push(obj.cantidad)
    });

    this.viveconChart = {
      title: {
        text: 'Datos Personales',
        subtext: 'Con quién vive',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        confine: true
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: descripciones,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Cantidad',
          type: 'bar',
          barWidth: '60%',
          data: [{value:valores[0],itemStyle: {color: '#5b8e7d'}},{value:valores[1],itemStyle: {color: '#bc4b51'}},{value:valores[2],itemStyle: {color: '#f4a259'}},{value:valores[3],itemStyle: {color: '#f4e285'}}],

        }
      ]
    }
  }

  TipoPrepasChart(object: any[]){
    let descripciones: any = [];
    let valores: any = [];
    object.forEach(obj => {
      descripciones.push(obj.descripcion)
      valores.push(obj.cantidad)
    });
    this.bachillerChart = {
      title: {
        text: 'Datos Escolares',
        subtext: 'Tipo de Bachillerato',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        confine: true
      },
      /*legend: {
        orient: 'vertical',
        left: 'left'
      },*/
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: valores[0], name: descripciones[0] },
            { value: valores[1], name: descripciones[1] }
          ],
          color:colorPalette,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

  prepasChart(object: any[]) {
    let descripciones: any = [];
    let valores: any = [];
    object.forEach(obj => {
      descripciones.push(obj.descripcion)
      valores.push(obj.cantidad)
    });
    this.bachilleratosChart = {
      title: {
        text: 'Datos Escolares',
        subtext: 'Bachilleratos',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        confine: true
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: descripciones,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            rotate: 20,
          },
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Cantidad',
          type: 'bar',
          barWidth: '60%',
          data: [{value:valores[0],itemStyle: {color: '#5b8e7d'}},{value:valores[1],itemStyle: {color: '#bc4b51'}},{value:valores[2],itemStyle: {color: '#f4a259'}},{value:valores[3],itemStyle: {color: '#f4e285'}},{value:valores[4],itemStyle: {color: '#588157'}},{value:valores[5],itemStyle: {color: '#bc4749'}},
          {value:valores[6],itemStyle: {color: '#f4a259'}},{value:valores[7],itemStyle: {color: '#05668d'}},{value:valores[8],itemStyle: {color: '#5b8e7d'}},{value:valores[9],itemStyle: {color: '#f4e285'}},{value:valores[10],itemStyle: {color: '#9fffcb'}},]
        }
      ]
    }
  }

  promedioChart(object:any, object2:any, object3:any) {
    let promedBachiller = object;
    let promedTSU = object2.promedio;
    let promedING = object3.promedio;

    this.promediosChart = {
      title: {
        text: 'Datos Escolares',
        subtext: 'Promedios',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        confine: true
      },
      /*legend: {
        orient: 'vertical',
        left: 'left'
      },*/
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: promedBachiller, name: 'Bachillerato' },
            { value: promedING, name: 'TSU' },
            { value: promedING, name: 'Ingeniería' }
          ],
          color:colorPalette,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

  }

  calificacionesChart(object:any,object2:any){
    let tsuPromedios: any = object.porCuatrimestre;
    let ingPromedios: any = object2.porCuatrimestre;

    this.gradeChart = {
      title: {
        text: 'Datos Escolares',
        subtext: 'Calificación por cuatrimestre',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        confine: true
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['TSU1', 'TSU2', 'TSU3', 'TSU4','TSU5','TSU6','ING7','ING8'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            rotate: 0,
          },
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Cantidad',
          type: 'bar',
          barWidth: '60%',
          data: [{value:tsuPromedios[0],itemStyle: {color: '#5b8e7d'}},{value:tsuPromedios[1],itemStyle: {color: '#bc4b51'}},{value:tsuPromedios[2],itemStyle: {color: '#f4a259'}},{value:tsuPromedios[3],itemStyle: {color: '#588157'}},
          {value:tsuPromedios[4],itemStyle: {color: '#bc4749'}},{value:tsuPromedios[5],itemStyle: {color: '#f4a259'}},{value:ingPromedios[0],itemStyle: {color: '#05668d'}},{value:ingPromedios[1],itemStyle: {color: '#f4e285'}}]
        }
      ]
    }
  }

}
