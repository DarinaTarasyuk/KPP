import {Leleka} from './Leleka';
//npm test
//обгортка
describe ('Lelka Testing', ()=> {
    let leleka:Leleka; // створення екземпляру
    beforeEach(()=>{ //код що виконується перед spec
        leleka = new Leleka("лелека", 150);
    })

    it ("Створення екземпляру класу", ()=>{ // один тест/spec
        expect(leleka).toBeTruthy(); // перевірка на відповідність очікуванням 
    })

    it ("Розрахунок кількості їжі для лелеки з розмахом крил L = 150", ()=>{ // один тест/spec
        let f1 = leleka.food();
        let f2 = 150*1/3;
        expect(f1.toFixed(2)).toBe(f2.toFixed(2)); // перевірка на відповідність очікуванням 
    })
});
