import { Component, Input, OnInit, Output } from '@angular/core';
import { Good } from '../my-form/Class/goods';
import { ValidatorCountService } from '../my-form/Services/validatorCount.service';
import { ValidatorPrice } from '../my-form/Services/validatorPrice.service';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {
  // властивість для редагування
  @Input() good!:Good;
  @Input() show:boolean = true;
  @Output() goodChange: EventEmitter<Good> = new EventEmitter<Good>();
  @Output() showChange = new EventEmitter();
  constructor() { }

  validate_price(d:number):boolean{
    let v = new ValidatorPrice();
    if (d!=0) {
      if (v.validate_price(d)) return true;
      else return false;
    }
    else return false;
  }

  save(n:any, c:any, u:any, p:any){
    c = parseInt(c);
    this.show = false;
    if (this.validate_price(p)==false) throw Error("Error of price");
    let valid = new ValidatorCountService();
    if (valid.validate_count(c)==false) throw Error("Error of count");
    this.good = new Good(n,c,u,p,this.good.manufacturer);
    this.goodChange.emit(this.good);
    this.showChange.emit(this.show);
  }
  ngOnInit() {}

}
