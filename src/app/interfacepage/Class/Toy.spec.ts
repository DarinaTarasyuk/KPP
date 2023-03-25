import { Toy } from "./Toy";
//npm test
//обгортка
describe ('Toy Testing', ()=> {
    let toy:Toy; // створення екземпляру
       beforeEach(()=>{ //код що виконується перед spec
        toy = new Toy ("Джип FK34", 150, "машинка", "червоного", 8);
    })

    it ("Створення екземпляру класу", ()=>{ // один тест/spec
        expect(toy).toBeTruthy(); // перевірка на відповідність очікуванням 
    })

    it ("Перевірка віку для іграшки", ()=>{ // один тест/spec
        let f1 = toy.IsAge(5);
        let f2:boolean;
        f2 = true;
        if (5>=toy.recAge) f2=true;
        else f2=false;
        expect(f1).toBe(f2); // перевірка на відповідність очікуванням 
    })
});
