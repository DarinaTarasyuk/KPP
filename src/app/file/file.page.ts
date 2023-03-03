import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  data:any = [];
  data_user:any = [];
  showDetails:boolean[] = new Array(10).fill(false); //видимість елементів
  dataUrl = 'https://api.jsonbin.io/v3/b/6401feddc0e7653a0581cf00'; //адреса файлу
  loading:any;  //об'єкт для очікування
  Inputx!:string;
  x:number = 0;

  constructor(public loadingController:LoadingController) {    
    }

  ngOnInit() {
  }

  async load (x:string = '80'){ //функція зчитування
    
    this.data = [];
    this.data_user = [];
   
    try {
      this.x = parseFloat(x);
      if (isNaN(this.x)==true){
        throw new Error ('Parameter is not a number!');
      }
    }
    catch (error){
      console.log(error);
    }

    //створення нового контролера
    this.loading = await this.loadingController.create({
      spinner: "circles",
      message: "Wait. Loading..."
    });

    await this.loading.present();

    fetch(this.dataUrl)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.data = json;
      this.data = this.data.record;
      let i = 0;
      console.log (this.data);
      while (this.data[i] != undefined) {
        this.data_user.push(this.data[i][0]);
        i++;
      }
      this.loading.dismiss();
    });

     for (let item of this.showDetails){
         item = false;
         console.log (item);
    }
  }


  toggleDetails(i:number){ //видимість елементів
    if (this.showDetails[i]){
      this.showDetails[i] = false;
    }
    else {
      this.showDetails[i] = true;

    }
  }

  getGreen(a:number, b:number) { //визначення кольору
    return a==b ? 'green' : '';
  }
}