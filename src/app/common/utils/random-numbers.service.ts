import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { includes } from 'lodash';
import { PhoneNumber } from '../phone-number';

@Injectable({
  providedIn: 'root'
})
export class RandomNumbersService {
  maxNumber: number;
  minNumber: number;
  formattedPhoneNumber: PhoneNumber[];

  /**
   * Uses Math.random() to generate values between 1000000000 and 100000000.
   * @returns random 9 digit numbers since 0 is a constant prefix in each number
   */
  private _randomNumber(): number {
    return Math.floor(Math.random() * (1000000000 - 100000000)) + 100000000;
  }

  /**
   * This function generates the number random numbers specified by the user
   * @param quantity - number of random numbers to be generated
   */

  public generatePhoneNumbers(quantity: number): void {
    this.formattedPhoneNumber = [];
    const phoneNumbers = [];
    let i: number;

    for (i = 0; i < quantity; i++) {
      let phoneNumber = this._randomNumber();
      // Regenerate phone number in case a duplicate is found. Just as a counter measure
      if (includes(phoneNumbers, phoneNumber)) {
        phoneNumber = this._randomNumber();
      }
      phoneNumbers.push(phoneNumber);
      this.formattedPhoneNumber.push({
        index: i + 1,
        number: '0'.concat(phoneNumber.toString())
      });
    }

    // get the max and min number in the array
    this.maxNumber = Math.max(...phoneNumbers);
    this.minNumber = Math.min(...phoneNumbers);
  }
}
