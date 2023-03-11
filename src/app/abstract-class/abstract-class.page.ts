import { Component, OnInit } from '@angular/core';
import {Bird} from "./Class/Bird";
import {Leleka} from "./Class/Leleka";
import {Vorona} from "./Class/Vorona";

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  
  bird:Bird[] = []; //поліморфний контейнер
  food_leleka:number =0;
  food_vorona:number = 0;
  Inputx!:string;

  constructor() { }

  getRandom(min:number, max:number){ //генерація рандомних чисел 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  count (nn:any = 5){ //функція для проведення розрахунків
    this.bird = new Array (); //створення масиву
    let n = parseInt(nn);

    for (let i=0; i<n; i++){
      if (i%2==0) this.bird.push(new Leleka("лелека", this.getRandom(100, 200)));
      else this.bird.push(new Vorona("ворона", this.getRandom(15, 30)));
    }

    this.bird.forEach((element) =>{
      element.food();
      if (element instanceof Leleka) this.food_leleka += element.food();
      else this.food_vorona+=element.food();
    }
    )

  }
  ngOnInit() {
  }

}
