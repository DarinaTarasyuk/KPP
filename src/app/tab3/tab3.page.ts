import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  Inputa!: string;
  a!: number;
  arr!:number[][];

  create_array (a: string) {
    this.arr =[];
   
    try {
      this.a = parseInt(a!);

      if (isNaN(this.a)==true){
        throw new Error ('Parameter is not a number!');
      }
      if (this.a <=0){
        throw new Error ('Parameter less than zero!');
      }

      let i:number=0, j:number;
      this.arr = Array(this.a);
      console.log("Array created");

      for (i=0; i<this.a; i++){
        this.arr[i] = Array(this.a);
        for (j=0; j<this.a; j++){
          this.arr[i][j] = parseFloat((Math.random()*101).toFixed(0));
        }
      }  
    }
    catch (error){
      console.log(error);
    }
  }
 
  getColor(b:number[]){
    let s:number = 0;
    for (let item of b){
      s+=item;
    }
       if (s%2==0) {
        console.log("Sum is even", s);
        return 'green';
       } else {
        console.log("Sum is odd", s);
        return 'red';
       }
  }

  ngOnInit(){
  }
}
