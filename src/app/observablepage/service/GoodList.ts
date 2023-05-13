import { Good } from "./Good";
import { ConfigService } from "./config.service";
export class GoodList{
    //масив зі списком товарів
    goodList = new Array();
    // масив з результами пошуку
    searchGood =  new Array();
    //відкритий масив рядків з результатом пошуку
    searchGoodResult:string[] = [];
    //сервіс для спостереження за змінами виду
    typeSub = this.configService.type$
        //підписуємось на зміни
        .subscribe(() =>{
            //отримумо нове значення вижи
            let type=this.configService.type$.value;
            //якщо зміни відбулись, шукаємо усі товари
            this.search(type.id);
        });
   
    //ініціалізація початкових значень
    constructor(private configService:ConfigService){
        let good = new Good();
        good.name = "Паляниця";
        good.manuf = "КиївХліб";
        good.type_id = 0;
        good.count = "5 штук";
        good.price = 35.00;
        good.date = "15.05.23";
        this.add(good);

        let good1 = new Good();
        good1.name = "Банани";
        good1.manuf = "Бразилія";
        good1.type_id = 1;
        good1.count = "10 ящиків";
        good1.price = 41.00;
        good1.date = "15.07.23";
        this.add(good1);
        //this.search(0);
    }
    //додавання товару
    add(g:Good){
        this.goodList.push(g);
        this.search(g.type_id);
    }
    //пошук  товару
    search(id: number){
        let c:number = 0;
        this.searchGood = this.goodList.filter((good) => {
            return good.type_id == id;
        })
        this.searchGoodResult = [];
        this.searchGood.forEach(el =>{
            this.searchGoodResult.push('ТОВАР №' + c);
            this.searchGoodResult.push('Назва: ' + el.name);
            this.searchGoodResult.push('Виробник: ' + el.manuf);
            this.searchGoodResult.push('Кількість: ' + el.count);
            this.searchGoodResult.push('Ціна: ' + el.price);
            this.searchGoodResult.push('Дата придатності: ' + el.date);
            c++;
        })
    }
}