import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду за допомогою рекурсії x=3 y=20.0855', () =>{
    let x = 3;
    let y = Math.exp(x);
    let xy= service.getTab(-9.5, 9.5, 0.5);
    let data = {yy:1};
    service.getRecursion(x,1,1,1,0,data);
    expect(y.toFixed(2)).toBe(data.yy.toFixed(2));
  });
});
