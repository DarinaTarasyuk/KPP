import {Vorona} from './Vorona';
//npm test
//обгортка
describe ('Vorona Testing', ()=> {
    let vorona:Vorona; // створення екземпляру
    beforeEach(()=>{ //код що виконується перед spec
        vorona = new Vorona("ворона", 20);
    })

    it ("Створення екземпляру класу", ()=>{ // один тест/spec
        expect(vorona).toBeTruthy(); // перевірка на відповідність очікуванням 
    })

    it ("Розрахунок кількості їжі для ворони з висотою L = 20", ()=>{ // один тест/spec
        let f1 = vorona.food();
        let f2 = 20*0.8;
        expect(f1.toFixed(2)).toBe(f2.toFixed(2)); // перевірка на відповідність очікуванням 
    })
});
