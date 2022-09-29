import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraficasComponent implements OnInit {

  generoViveChart: EChartsOption = {
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
      ]
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
        data: [18,7,2,2],
        itemStyle: {
          color: '#2a9d8f'
        }
      }
    ]
  }
  ingresosChart: EChartsOption = {
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
        data: [18,7,2,2]
      }
    ]
  }

  laborChart:EChartsOption = {
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
      ]
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
          rotate: 45,
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
        data: [4,3,1,1]
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
        data: [6,5,5,4,2,7,8]
      }
    ]
  }


  constructor() { }
  data:any;
  ngOnInit(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }

  }

  

}