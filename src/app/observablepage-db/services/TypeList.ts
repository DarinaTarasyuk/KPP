import { Type } from "./Type";
export class TypeList{
    type = new Array();
    constructor (){
        // this.type.set(0, {id:0, name:"Хлібобулочні вироби"})
        // this.type.set(1, {id:1, name:"Фрукти"})
        // this.type.set(2, {id:2, name:"Овочі"})
        // this.type.set(3, {id:3, name:"Молочні продукти"})
    }
    add(t:Type) {
        this.type.push(t);
    }
}