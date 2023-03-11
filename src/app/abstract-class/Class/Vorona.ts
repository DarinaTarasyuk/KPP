import {Bird} from "./Bird"

export class Vorona extends Bird {
    constructor(name:string, L:number){
        super(name, L);
    }
    show (){
        return "Назва: " + this.name + ", висота: " + this.L + " см, кількість їжі: "+ this.food().toFixed(2);
    };
    food(){
        return this.L*0.8;
    }
}