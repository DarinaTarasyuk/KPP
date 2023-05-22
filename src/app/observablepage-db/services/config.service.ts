import { Injectable } from '@angular/core';
import { Type } from './Type';
import { TypeList } from './TypeList';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  // поточний вид
  currentType = DEFAULT_TYPE;
  // обєкт-спостерігач
  type$: BehaviorSubject<Type> = new BehaviorSubject<Type>(DEFAULT_TYPE);
  // змін апоточного виду на новий 
  setType(t:Type){
    console.log("Зміна");
    //генерація наступного значення
    this.type$.next(t);
  }
   constructor() { }
}
// створення списку видів
var typeList = new TypeList();
// отримуємо початкове значення
const DEFAULT_TYPE = {"id": 1, "name":"укр"};
