import {Bird} from "./Bird"

export class Leleka extends Bird {
    constructor(name:string, L:number){
        super(name, L);
    }
    show (){
        return "Назва: " + this.name + ", розмах крил: " + this.L + " см, кількість їжі: "+ this.food().toFixed(2);

    };
    food(){
        return this.L*1/3; //змінена формула
    }
}