import { IGood } from "../Interface/IGood";
import { Product } from "./Product";
import { IShow } from "../Interface/IShow";
export class DairyProduct extends Product implements IShow{
    fat:number;

    constructor(name:string, price:number, expDate:Date, fat:number, type:string) {
        super(name, price, expDate, type);
        this.fat=fat;
    }
    
    get status(){
        let s:string;
        let date = new Date();
        let day = (date.getTime() - this.expDate.getTime())/(24 * 60 * 60 * 1000);
        if (day>=5) s="Термін придатності дійсний";
        else if (day<=5) s ="Термін придатності закінчується";
        else s = "Термін придатності закінчився";
       return s;
    }

    get getDiscouted(){
        let n:number;
        switch(this.status){
            case "Термін придатності дійсний":
                n=this.price;
                break;
            case "Термін придатності закінчується":
                n=this.price*0.75;
                break;
            case "Термін придатності закінчився":
                n=this.price*0.25;
                break;
            default:n=this.price;
        }
        return n.toFixed(2);
    }

    show(){
        let s = this.type +" "+this.name+" з жирністю " +  this.fat + 
        "% коштує " + this.price + " гривень. Термін придатності: " 
        + this.expDate.getDay() + "." + this.expDate.getMonth() + "." + this.expDate.getFullYear();
        return s;
    }
}