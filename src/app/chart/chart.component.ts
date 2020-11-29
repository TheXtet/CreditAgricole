import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    let chart = new Chart('myChart', {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: ['Виконано', 'Не виконано'],
        datasets: [{
          label: 'individual dataset',
          backgroundColor: ['rgb(139, 132,217)', 'rgb(255,255,255)'],
          borderColor: ['rgb(139, 132,217)', 'rgb(255,255,255)'],
          data: [75, 25]
        }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 65,
        title: {
          display: true,
          text: 'Індивідуальний',
          position: 'bottom',
          padding: 16,
          fontFamily: "'Arial', 'sans-serif'",
          fontStyle: "normal",
          fontSize: 25
        },

        animation: {
          duration: 2500,
          easing: 'linear'
        }
      }


    });

  }
}
