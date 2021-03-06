import { Component, OnInit } from '@angular/core';
//Charts modules
import { Chart } from 'chart.js';
//Routing Service Class
import { stkRoutingServices } from '../../../services/stkRouting.services';

@Component({
  selector: 'app-stkCharts',
  templateUrl: './stkCharts.component.html',
  styleUrls: ['./stkCharts.component.css']
})
export class stkChartsComponent implements OnInit {

  constructor(private _routing:stkRoutingServices) { }

  chart:any = [];
  symbol:string = ' ';
  
  ngOnInit() {
    this._routing.symbolEmitter.subscribe(
      res=>{
        this.symbol = res;
      });
  }
  
  

  get1m():void{
    this._routing.getChart1m(this.symbol).subscribe(res=>{
      let results:any = [res];
      let close = results[0].map(res => res.close);
      let date = results[0].map(res => res.date);
      this.chart.length = 0;
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: date,
          datasets: [
            {
              data: close,
              borderColor: '#ff6384',
              fill: false
            }
          ],
              options:{
                legend:{
                  display:true
                },
                scales: {
                  xAxes: [{
                    display:true
                  }],
                  yAxes: [{
                    display:true
                  }]
                }
              }
            }
        })
        });
  }

  get3m():void{
    this._routing.getChart3m(this.symbol).subscribe(res=>{
      let results:any = [res];
      let close = results[0].map(res => res.close);
      let date = results[0].map(res => res.date);
      this.chart.length = 0;
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: date,
          datasets: [
            {
              data: close,
              borderColor: '#ff6384',
              fill: false
            }
          ],
              options:{
                legend:{
                  display:true
                },
                scales: {
                  xAxes: [{
                    display:true
                  }],
                  yAxes: [{
                    display:true
                  }]
                }
              }
            }
        })
        });
  }

  get1y():void{
    this._routing.getChart1y(this.symbol).subscribe(res=>{
      let results:any = [res];
      let close = results[0].map(res => res.close);
      let date = results[0].map(res => res.date);
      this.chart.length = 0;
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: date,
          datasets: [
            {
              data: close,
              borderColor: '#ff6384',
              fill: false
            }
          ],
              options:{
                legend:{
                  display:true
                },
                scales: {
                  xAxes: [{
                    display:true
                  }],
                  yAxes: [{
                    display:true
                  }]
                }
              }
            }
        })
        });
  }

  get5y():void{
    this._routing.getChart5y(this.symbol).subscribe(res=>{
      let results:any = [res];
      let close = results[0].map(res => res.close);
      let date = results[0].map(res => res.date);
      this.chart.length = 0;
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: date,
          datasets: [
            {
              data: close,
              borderColor: '#ff6384',
              fill: false
            }
          ],
              options:{
                legend:{
                  display:true
                },
                scales: {
                  xAxes: [{
                    display:true
                  }],
                  yAxes: [{
                    display:true
                  }]
                }
              }
            }
        })
        });
  }

}
