import { TestBed } from '@angular/core/testing';

import { ValidatorCountService } from './validatorCount.service';

//npm test

describe('ValidatorCountService', () => {
  let service: ValidatorCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('перевірка чи кількість не менше нуля', () => {
    let s = service.validate_count(-15);
    expect(s).toBe(false);
  });

  it('перевірка, що кількість може дорівнювати нулю', () => {
    let s = service.validate_count(0);
    expect(s).toBe(true);
  });

  it('перевірка кількості на додатнє ціле число', () => {
    let s = service.validate_count(15);
    expect(s).toBe(true);
  });

  it('перевірка кількості на додатнє дійсне число', () => {
    let s = service.validate_count(15.25);
    expect(s).toBe(false);
  }); 
});
