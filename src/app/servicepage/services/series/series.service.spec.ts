import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду x=3 y=20.0855', () =>{
    let x = 3;
    let y = Math.exp(x);
    let xy= service.getTab();
    let y1 = service.getSeries(x);
    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });

});
