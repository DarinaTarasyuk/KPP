import { Component, OnInit } from '@angular/core';
import { Good } from '../my-form/Class/goods';
@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  show_update:boolean = false;
  goods:Good[] =[];

  constructor() { }
  ngOnInit() {}

  addGood(event:any){
    // перевіряємо чи є отримана подія саме типом Good
    if (event as Good) {
      let good:Good = event;
      this.goods.push(good);
      console.log(this.goods);
    } else 
    throw new Error("Error of type");
  }

  update(){
    this.show_update = true;
  }

  showUp(event: any){
    // перевіряємо тип event
    if (typeof event === "boolean") {
      this.show_update = event;
    } else 
    throw new Error("Error of type");
  }

  update_save(event:any, i:number) {
    //перевіряємо тип event
    if (event as Good){
      this.goods[i] = event;
    } else 
    throw new Error("Error of type");
  }
}
