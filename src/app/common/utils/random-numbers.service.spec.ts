import { TestBed } from '@angular/core/testing';

import { RandomNumbersService } from './random-numbers.service';

describe('RandomNumbersService', () => {
  let randomNumberService: RandomNumbersService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RandomNumbersService]});
    randomNumberService = TestBed.get(RandomNumbersService);
  });

  it('should be created', () => {
    expect(randomNumberService).toBeTruthy();
  });

  it('should generate an array of numbers', (done: DoneFn) => {
      randomNumberService.generatePhoneNumbers(5);
      expect(randomNumberService.formattedPhoneNumber.length).toBe(5);
      done();
  });
});
