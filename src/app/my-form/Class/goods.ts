export class Good {
    name: string ='';
    count: number = 0;
    unit: string = '';
    price: number = 0;
    manufacturer: string [] = [];
    constructor (name:string, count:number, unit: string, price: number,manufacturer: string [] ) {
        this.name = name;
        this.count = count;
        this.unit = unit;
        this.price = price;
        this.manufacturer = manufacturer;
    }
    // Назва товару.
    // • Одиниця виміру.
    // • Кількість на складі.
    // • Ціна за одиницю.
    //Інформаціє, яка додається динамічно:
    //• Список виробників товару
}