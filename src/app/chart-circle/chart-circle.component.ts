import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-chart-circle',
  templateUrl: './chart-circle.component.html',
  styleUrls: ['./chart-circle.component.css']
})
export class ChartCircleComponent implements OnInit {
  @Input('label') label = '';
  @Input('percent') percent = 0;
  @Input('id') id = 0;
  constructor() { }

  async createChart(){
    var options = {
      series: [this.percent],
      colors:["#65db65"],
      chart: {
        width: 100,
        height: 120,
        type: "radialBar",
        toolbar: {
          show: false
        },
        id: `${this.id}`
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.15
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: 0,
              show: true,
              color: "#888",
              fontSize: "12px"
            },
            value: {
              formatter: function(val: number) {
                return val.toFixed(1)+"%";
              },
              offsetY: 0,
              color: "#888",
              fontSize: "12px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "image",
        image: {
          src: ['/assets/gradient.png']
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: [this.label]
      }
    let chart = new Promise<ApexCharts>(resolve => {
      setTimeout(()=>{
        const element = document.getElementById(`id${this.id}`)
        var chart = new ApexCharts(element, options);
        resolve(chart)
      }, 500)
    })
    return chart
  }

  async ngOnChanges(changes: SimpleChanges){
    let chart = await this.createChart()

    if(changes.percent.firstChange) {
      chart.render()
    }
    else {
      this.percent = changes.percent.currentValue
      ApexCharts.exec(`${this.id}`, 'updateSeries',[this.percent], true)
    }
  }

  ngOnInit(): void {
    
    

    // adicionar cursor pointer para os charts
    // let charts = Array.from(document.querySelectorAll('.apexcharts-canvas'))
    // charts.map(el => {
    //   el.classList.add('pointer')
    // })
  }

}
