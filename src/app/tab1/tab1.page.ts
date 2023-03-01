import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  Inputa!: string;
  Inputb!: string;
  Inputc!: string;
  a!: number;
  b!: number;
  c!: number;
  d: number = 0;

  num (a: string, b: string, c: string) {
    try {
      this.a = parseFloat(a!);
      this.b = parseFloat(b!);
      this.c = parseFloat(c!);
      this.d = 0;

      if ((isNaN(this.a)==true)||(isNaN(this.b)==true)||(isNaN(this.c)==true)){
        throw new Error ('Parameter is not a number!');
      }

      if (this.a%27==0) this.d++;
      if (this.b%27==0) this.d++;
      if (this.c%27==0) this.d++;
    }
    catch (error){
      console.log(error);
    }
  }
}
