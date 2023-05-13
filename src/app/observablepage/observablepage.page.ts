import { Component, OnInit } from '@angular/core';
import { GoodList } from './service/GoodList';
import { TypeList } from './service/TypeList';
import { Type } from './service/Type';
import { Good } from './service/Good';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})

export class ObservablepagePage implements OnInit {
  //список видів товарів
  types = new TypeList();
  //сервіс для спостерігача
  private configService = new ConfigService();
  //масив спостерігачів
  private subscriptions: Subscription[] = [];
  //список товарів
  goodList = new GoodList(this.configService);
  // поточний вид товару
  type: Type = new Type;
  //лічильник?
  count = 0;

  constructor() { }

  ngOnInit() {
    //оголошення спостерігача
    const typeSub = this.configService.type$
      //підписуємось на зміни та отримуємо поточне значення
      .subscribe(() =>{
          //отримумо нове значення вижи
          this.type = this.configService.type$.value;
          //додаємо спостерігача до класу
          this.subscriptions.push(typeSub);
      });
  }

  // вибір наступної мови 
  nextType(){
    //якщо є наступна мова у списку
    if (this.count < this.types.type.size -1) {
      //збільшуємо лічильник
      this.count++;
    }
    // інакше зменшуємо
    else this.count = 0;
    //змінюємо вид у сервісі
    this.configService.setType(this.types.type.get(this.count));
  }

  //додавання нового товару
  addGood(name:any, manuf:any, count:any, price:any, date:any){
    let good = new Good();
    good.name = name;
    good.manuf=manuf;
    good.count = count;
    good.date = date;
    good.price = price;
    good.type_id = this.type.id;
    this.goodList.add(good);
  }

  //додавання нового виду товарів
  addType(type:any){
    let t = new Type();
    t.id = this.types.type.size;
    t.name = type;
    this.types.add(t);
  }

  ngOnDestroy(){
    this.subscriptions
      .forEach(s=>s.unsubscribe());
  }
}
