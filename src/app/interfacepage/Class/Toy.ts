import { IGood } from "../Interface/IGood";
import { IShow } from "../Interface/IShow";

export class Toy implements IGood, IShow{
    name:string;
    price:number;
    type?:string;
    color:string;
    recAge:number;

    constructor(name:string, price:number, type:string, color:string, recAge:number) {
        this.name = name;
        this.price=price;
        this.type = type;
        this.color = color;
        this.recAge = recAge;
    }
    
    IsAge(a:number){
        if (a>=this.recAge) return true;
        else return false;
    }

    show(){
        let s = this.type +" "+this.name + " " + this.color + " кольору"  + 
        " коштує " + this.price + " гривень. Рекомендовано для дітей старше: " + this.recAge + " років.";
        return s;
    }
}