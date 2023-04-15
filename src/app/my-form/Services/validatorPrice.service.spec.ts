import { TestBed } from '@angular/core/testing';

import { ValidatorPrice } from './validatorPrice.service';

describe('ValidatorPrice', () => {
  let service: ValidatorPrice;

  // npm test

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorPrice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('перевірка чи ціна більше нуля', () => {
    let s = service.validate_price(-15);
    expect(s).toBe(false);
  });
  
  it('перевірка, що ціна не дорівнює нулю', () => {
    let s = service.validate_price(0);
    expect(s).toBe(false);
  });

  it('перевірка, що ціна додатня', () => {
    let s = service.validate_price(15);
    expect(s).toBe(true);
  });
});
