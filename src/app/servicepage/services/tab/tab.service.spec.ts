import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

//npm test
describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Табулювання функції x=3 y=20.0855', () =>{
    let x = 3;
    let y = Math.exp(x);
    let xy= service.getTab();
    let y1:number | undefined = 2;
    y1 = xy.get(x);
    if (y1 !== undefined){
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    }
  });
});
