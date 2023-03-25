import { DairyProduct } from "./DairyProduct";
//npm test
//обгортка
describe ('Lelka Testing', ()=> {
    let milk:DairyProduct; // створення екземпляру
    let date = new Date (2023, 3, 31);
    beforeEach(()=>{ //код що виконується перед spec
        milk = new DairyProduct ("Молокія", 45, date, 5, "молоко");
    })

    it ("Створення екземпляру класу", ()=>{ // один тест/spec
        expect(milk).toBeTruthy(); // перевірка на відповідність очікуванням 
    })

    it ("Отримання статусу продукту", ()=>{ // один тест/spec
        let f1 = milk.status;
        let f2 = ""
        let date = new Date();
        let day = (date.getTime() - milk.expDate.getTime())/(24 * 60 * 60 * 1000);
        if (day>=5) f2="Термін придатності дійсний";
        else if (day<=5) f2 ="Термін придатності закінчується";
        else f2 = "Термін придатності закінчився";
        
        expect(f1).toBe(f2); // перевірка на відповідність очікуванням 
    })

    it ("Отримання знижки на продукт", ()=>{ // один тест/spec
        let f1 = milk.getDiscouted;
        let f2:number;
        switch(milk.status){
            case "Термін придатності дійсний":
                f2=milk.price;
                break;
            case "Термін придатності закінчується":
                f2=milk.price*0.25;
                break;
            case "Термін придатності закінчився":
                f2=milk.price*0.75;
                break;
            default:f2=milk.price;
        }
        
        expect(f1).toBe(f2.toFixed(2)); // перевірка на відповідність очікуванням 
    })
});
