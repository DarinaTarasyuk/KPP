import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RecursionService } from './services/recursion/recursion.service';
import { SeriesService } from './services/series/series.service';
import { TabService } from './services/tab/tab.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})

export class ServicepagePage implements OnInit {
  ////Графік////
  // ?: позначення необов'язкової/додаткової змінної
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef; 
  lineChart: any;
  xx: string[] =[];
  yy: number[] = [];
  data1: string[] = [];
  
  ////Вхідні дані////
  Inputxn!: string;
  Inputxk!: string;
  Inputh!: string;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;

  ////Функція////
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();

  constructor(private tabServise:TabService,
    private seriesService:SeriesService,
    private recursionService:RecursionService) {
    Chart.register(...registerables) 
  }

  calculation(xn:any=-9.5, xk:any=9.5, h:any=0.5){
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabServise.getTab(this.xn, this.xk, this.h);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(this.xn, this.xk, this.h);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(this.xn, this.xk, this.h);
    this.input();
  }

  input(){
    this.xyTab.forEach((value, key, map)=>{
      let s=' ';
      let y:number = 0;
      y=value;
      s=y.toFixed(4)+" --- ";
      y=this.xySeries.get(key);
      s=s+y.toFixed(4)+" --- ";
      y=this.xyRecursion.get(key);
      s=s+y.toFixed(4)+" --- ";
      let x = key;
      this.xyInput.set(x.toFixed(2),s);
    })
  }

  // метод створення графіку
  lineChartMethod (){
    // видалення графіка, якщо уже існує
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    // створення нового графіка
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type:'line', //тип - лінійний графік
      data: { // параметри графіка
        labels: this.xx, // точки осі х
        datasets: [ // властивості, що створюють графік
          {
            label: 'Графік функції', //підпис
            //налаштування виведення
            fill:false, // заповнення області під лінією
            borderColor: 'rgba(75,192,192,1)', //колір
            pointRadius: 1, //радіус точки
            data: this.yy, // точки осі у
          }
        ]
      }
    });
  }

  graph(xn:string="-9.5", xk:string="9.5", h:string="0.5"){
      this.xn = parseFloat(xn);
      this.xk = parseFloat(xk);
      this.h = parseFloat(h);
      let x: number;
      x = this.xn;
      this.xx = new Array();
      this.yy= new Array();

      while (x <= this.xk){
        this.xx.push(x.toFixed(2));
        this.yy.push(parseFloat(this.xySeries.get(x)));
        x = x + this.h;
      }
    
      this.lineChartMethod();
    
  }

  ngOnInit() {
  }

}
