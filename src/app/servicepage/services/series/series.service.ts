import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})

export class SeriesService {
  private xy = new Map();
  constructor( @Optional() private logService:LogService) { }
  
  getSeries(x:number){
    let sum:number = 1;
    let f = 1;
    let min = 1E-12;
    let n=0;
    let mem;
    let fact = 1;
    do{
      n++;
      fact = fact*n;
      f*=x;
      mem = f/fact;
      sum +=mem;
    }while(mem>min || mem <-min)
    return sum;
  }

  getTab (xn:number=-3*Math.PI, xk:number=3*Math.PI, h:number=0.5):Map<number,number>
  {
    let x=xn;
    let y=0.0;
    while (x<xk) {
      y=this.getSeries(x);
      this.xy.set(x,y);
      if(this.logService){
        this.logService.write("x="+x.toFixed(2)+" y="+y.toFixed(4));
      }
      x=x+h;
    }
    return this.xy;
  }
}


