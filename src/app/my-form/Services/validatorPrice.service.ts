import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorPrice {

  validate_price (value:number) {
    if (value>0) return true;
    else return false;
  }
  
  constructor() { }
}
