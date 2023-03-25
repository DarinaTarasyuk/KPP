import { Component, OnInit } from '@angular/core';
import { Toy } from './Class/Toy';
import { DairyProduct } from './Class/DairyProduct';
@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show_age_toy: string = "";
  show_toy:string = "";
  show_discouted:string = "";
  show_status:string = "";
  show_dproduct: string ="";
  Inputx!:string;

  constructor() { }

  ngOnInit() {

  }

  info_toy(a:string){
    let toy:Toy;
    toy = new Toy("'Джип FK34'", 150, "Машинка", "червоного", 8);
    this.show_toy = toy.show();
    let age = parseInt(a);
    if (toy.IsAge(age)) this.show_age_toy = "Іграшка підходить для дитини цього віку."
    else this.show_age_toy = "Іграшка не підходить для дитини вказаного віку."
  }

  info_dproduct(){
    let milk:DairyProduct;
    let date = new Date (2023, 3, 31);
    milk = new DairyProduct ("'Молокія'", 45, date, 5, "Молоко");
    this.show_dproduct = milk.show();
    this.show_status = milk.status;
    this.show_discouted = "Ціна зі знижкою:" + milk.getDiscouted;
  }


  
}
