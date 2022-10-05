import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {CarouselModule} from 'primeng/carousel';
type EChartsOption = echarts.EChartsOption
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraficasComponent implements OnInit {

  generoViveChart: EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      data: [
        'Masculino',
        'Femenino',
        'Soltero(a)',
        'Unión Libre',
      ],
      orient: 'vertical',
      left: 'left',
    },
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
          { value: 22, name: 'Masculino' },
          { value: 7, name: 'Femenino', selected: true }
        ]
      },
      {
        name: 'Vive con',
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
          { value: 28, name: 'Soltero(a)' },
          { value: 1, name: 'Unión Libre' },

        ]
      }
    ]
  };

  viveconChart: EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
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
        data: ['Ambos Padres', 'Uno Solo', 'Solo(a)', 'Otro Familiar'],
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
        data: [{value:18,itemStyle: {color: '#5b8e7d'}},{value:7,itemStyle: {color: '#bc4b51'}},{value:2,itemStyle: {color: '#f4a259'}},{value:2,itemStyle: {color: '#f4e285'}}],

      }
    ]
  }
  ingresosChart: EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
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
        data: ['$5,000 A $10,000', '$10,000 A $15,000', 'Menos de $5,000', 'Más de $15,000'],
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
        data: [{value:18,itemStyle: {color: '#5b8e7d'}},{value:7,itemStyle: {color: '#bc4b51'}},{value:2,itemStyle: {color: '#f4a259'}},{value:2,itemStyle: {color: '#f4e285'}}]
      }
    ]
  }

  laborChart:EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      data: [
        'Masculino',
        'Femenino',
        'Soltero(a)',
        'Unión Libre',
      ],

    },
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
          { value: 9, name: 'Si', selected: true  },
          { value: 20, name: 'No',}
        ]
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
          { value: 5, name: 'Si' },
          { value: 4, name: 'No' },

        ]
      }
    ]
  }

  razonTrabajaChart: EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
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
        data: ['Apoyar Económicamente a la Familia', 'Solventar Algunos Gastos Personales', 'Apoyar Totalmente a la Familia', 'Sostenerme Totalmente'],
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
        data: [{value:18,itemStyle: {color: '#5b8e7d'}},{value:7,itemStyle: {color: '#bc4b51'}},{value:2,itemStyle: {color: '#f4a259'}},{value:2,itemStyle: {color: '#f4e285'}}]
      }
    ]
  }

  bachillerChart:EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 27, name: 'Escuela publica' },
          { value: 2, name: 'Escuela Privada' }
        ],
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

  bachilleratosChart: EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
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
        data: ['Cecyte Rio', 'CBTIs 116', 'Conalep II', 'Cecyte Florido','CBTIs 58','Cecyte Villa del Sol','CBTIs 237'],
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
        data: [{value:18,itemStyle: {color: '#5b8e7d'}},{value:7,itemStyle: {color: '#bc4b51'}},{value:2,itemStyle: {color: '#f4a259'}},{value:2,itemStyle: {color: '#f4e285'}}]
      }
    ]
  }

  gradeChart: EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
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
        data: [{value:18,itemStyle: {color: '#5b8e7d'}},{value:7,itemStyle: {color: '#bc4b51'}},{value:2,itemStyle: {color: '#f4a259'}},{value:2,itemStyle: {color: '#f4e285'}}]
      }
    ]
  }

  promediosChart:EChartsOption = {
    title: {
      text: 'Datos Escolares',
      subtext: 'Tipo de Bachillerato',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 8.4, name: 'Bachillerato' },
          { value: 9.0, name: 'TSU' },
          { value: 9.1, name: 'Ingeniería' }
        ],
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


  constructor() { }
  data:any;

  ngOnInit(): void {

  }

  

}