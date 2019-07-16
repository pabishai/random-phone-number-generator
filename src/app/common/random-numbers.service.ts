import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumbersService {

  constructor() { }

  /**
   * Uses Math.random() to generate values between 1000000000 and 100000000.
   * @returns random 9 digit numbers since 0 is a constant prefix in each number
   */
  public generateRandomNumbers() {
    return Math.floor(Math.random() * (1000000000 - 100000000)) + 100000000;
  }
}
