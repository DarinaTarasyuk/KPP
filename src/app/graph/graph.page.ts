import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  //поле для створення графіку
  // ?: позначення необов'язкової/додаткової змінної
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef; 
  lineChart: any;
  Inputxn!: string;
  Inputxk!: string;
  Inputa!: string;
  Inputh!: string;
  xn: number = 0;
  xk: number = 0;
  a: number = 0 ;
  h: number = 0;
  xx: string[] =[];
  yy: number[] = [];
  data1: string[] = [];
  
  constructor() { Chart.register(...registerables) }
  ngOnInit() {
  }

  // метод створення графіку
  lineChartMethod (){
    // видалення графіка, якщо уже існує
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    // створення нового графіка
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type:'line', //лінійний графік
      data: { // основні дані
        labels: this.xx, // значення осі х
        datasets: [ // властивості datasets
          {
            label: 'Графік функції', //підпис
            //налаштування виведення
            fill:false, // заповнення області під лінією
            borderColor: 'rgba(75,192,192,1)',
            pointRadius: 1, //радуіс точки
            data: this.yy, // дані по осі у
          }
        ]
      }
    });
  }

  graph(xn:string ="-2.7", xk:string ="10.5", a:string="1", h:string="0.75"){
    this.data1=[];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number, y:number, i:number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy= new Array();

    while (x <= this.xk){
      if (x<=0){
        y = Math.pow(x,4)+2*Math.pow(x,3) - x;
      } 
      else {
        if (x<=this.a){
          y = 1,3* Math.sqrt(4+x*x);
        }
        else {
          y = Math.abs(x+1); // змінила функцію, бо дуже великі значення 
        }
      }
      this.xx.push (x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = "x = " + x.toFixed(1) + "   y = " + y.toFixed(1);
      this.data1.push(s);
      x = x + this.h;
    }
    this.lineChartMethod();
  }
}
