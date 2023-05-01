import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorCountService {

  validate_count (value:number) {
    
    if (value>=0 && Number.isInteger(value)) return true;
    else return false;
  }
  
  constructor() { }
}
