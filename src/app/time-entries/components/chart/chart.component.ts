import { Component, computed, input, OnInit, Signal} from '@angular/core';
import { EmployeeHours } from '../../types/employee-hours.interface';
import { Chart } from 'angular-highcharts';
import { DataPoint } from '../../types/data-point.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {

  
  employeeHours = input.required<EmployeeHours[]>();

  dataPoints: Signal<DataPoint[]> = computed(() => {
    let sum = this.employeeHours().reduce((sum, curr) => sum + curr.total, 0);
    return this.employeeHours().map((eh: EmployeeHours) => {
      let dataPoint: DataPoint = {
        name: eh.name,
        y: eh.total / sum * 100
      }
      return dataPoint;
    });
  })

  chart: Chart | undefined;

  ngOnInit(): void {
    this.chart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Chart'
      },
      credits: {
        enabled: false
      },
      plotOptions : {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
             enabled: true,
             format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          }
       }
      },
      series: [
        {
          type: 'pie',
          data: this.dataPoints()
        }
      ]
    });
  }

}
