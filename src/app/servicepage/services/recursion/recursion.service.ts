import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})

export class RecursionService {
  //data = { yy:0};
  yy:number =0 ;
  private xy = new Map();
  constructor(@Optional() private logService:LogService) { }
  
  getRecursion (x:number, mem:number, fact:number, f:number, n:number, sum:number){
    let min = 1E-12;
    n++;
    f*=x;
    fact = fact*n;
    mem = f/fact;
    sum= sum + mem;
    if(mem>min || mem <-min) this.getRecursion(x,mem,fact,f,n,sum);
    else this.yy = sum;
  }
  
  getTab (xn:number, xk:number, h:number):Map<number,number>
  {
    let x=xn;
    let y=1.0;
    while (x<xk) {
      this.getRecursion(x,1,1,1,0,y);
      this.xy.set(x,this.yy);
      if(this.logService){
        this.logService.write("x="+x.toFixed(2)+" y="+this.yy.toFixed(4));
      }
      x=x+h;
    }
    return this.xy;
  }
}
