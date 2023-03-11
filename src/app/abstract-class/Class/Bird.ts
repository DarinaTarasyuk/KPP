export abstract class Bird {
    name!:string;
    L!:number;
    constructor(name:string, L:number){
        this.L=L;
        this.name=name;
    }
    abstract show ():any;
    abstract food(): any;
}