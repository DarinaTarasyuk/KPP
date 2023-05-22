import { Component, OnInit } from '@angular/core';
import { GoodList } from './services/GoodList';
import { TypeList } from './services/TypeList';
import { Type } from './services/Type';
import { Good } from './services/Good';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ConfigService } from './services/config.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-observablepage-db',
  templateUrl: './observablepage-db.page.html',
  styleUrls: ['./observablepage-db.page.scss'],
})
export class ObservablepageDbPage implements OnInit {

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
  //лічильник
  count = 0;
  //змінні для бд
  bdGood = "Good";
  bdType = "Type";
  // для БД додати сервіс
  constructor(public fbService:FirebaseService) { }
 // початок рооти при завантаженні сторінки
  ngOnInit() {
    //підключення до бд
    this.fetchTask(this.bdGood, true);
    // отримання списку товарів
    let TaskRes = this.fbService.getRecordList(this.bdGood, true);
    TaskRes.snapshotChanges().subscribe();
    //отримання списку типів
    this.fetchTask(this.bdType, false);
    let TaskRes1 = this.fbService.getRecordList(this.bdType, false);
    TaskRes.snapshotChanges().subscribe();
    //оголошення спостерігача
    const typeSub = this.configService.type$
      //підписуємось на зміни та отримуємо поточне значення
      .subscribe(() =>{
          //отримумо нове значення вижи
          this.type = this.configService.type$.value;
       });
        //додаємо спостерігача до класу
        this.subscriptions.push(typeSub);   
  }

  //функція для отрмання списку з бд
  fetchTask(bd:any, op:any){
    this.fbService.getRecordList(bd,op).valueChanges().subscribe(res => {
      console.log(res)
      if (op) this.goodList.goodList = res;
      else {
        this.types.type = res;
        this.type = this.types.type[this.count];
        this.goodList.search(this.type.id);
      }
    })
  }
  // вибір наступної мови 
  nextType(){
    //якщо є наступна мова у списку
    if (this.count < this.types.type.length -1) {
      //збільшуємо лічильник
      this.count++;
    }
    // інакше зменшуємо
    else this.count = 0;
    //змінюємо вид у сервісі
    this.configService.setType(this.types.type[this.count]);
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
    // створення ноого товару у бд
    this.fbService.createGood(good);
    this.goodList.search(this.type.id);
    this.goodList.add(good);
  }

  //додавання нового виду товарів
  addType(type:any){
    let t = new Type();
    t.id = this.types.type.length + 1;
    t.name = type;
    this.fbService.createType(t);
  }

  ngOnDestroy(){
    this.subscriptions
      .forEach(s=>s.unsubscribe());
  }
}

