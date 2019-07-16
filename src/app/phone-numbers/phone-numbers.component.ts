import { Component, OnInit } from '@angular/core';
import { includes } from 'lodash';

import { PhoneNumbers } from './phone-numbers';
import { RandomNumbersService } from '../common/random-numbers.service';
import { SnackbarService } from './../common/snackbar.service';
import { DataPersistenceService } from '../common/data-persistence.service';


@Component({
  selector: 'app-phone-numbers',
  templateUrl: './phone-numbers.component.html',
  styleUrls: ['./phone-numbers.component.sass']
})
export class PhoneNumbersComponent implements OnInit {
  phoneNumbers: PhoneNumbers[];
  numberOfPhoneNumbers: number;
  columnsToDisplay: string[] = ['index', 'number'];
  placeHolderText = 'Enter number of phone numbers to be generated';

  constructor(private _randomNumberService: RandomNumbersService,
    private _snackBarService: SnackbarService,
    private _dataPersistenceService: DataPersistenceService) {}

  ngOnInit() {
  }

  /**
   * @returns an array with the index and unique 10 digit phone number all starting with 0
   */
  public generatePhoneNumbers() {
    this.phoneNumbers = [];

    if (!this.numberOfPhoneNumbers) {
      this._snackBarService.openSnackBar(
        'Please enter the number of phone numbers to generate', 'close',
        {verticalPosition: top}
      );
      return;
    }

    let i: number;

    for (i = 0; i < this.numberOfPhoneNumbers; i++) {
      const generatedPhoneNumber = {
        index: i + 1,
        // Append the "0" since it is constant in the generation of phone numbers
        number: '0'.concat(this._randomNumberService.generateRandomNumbers().toString())
      };
      if (includes(this.phoneNumbers, generatedPhoneNumber)) {
        this._snackBarService.openSnackBar(
          'Duplicate phone number found', 'close', {verticalPosition: top}
        );
        break;
      }
      this.phoneNumbers.push(generatedPhoneNumber);
    }
    this._dataPersistenceService.writePhoneNumbers(this.phoneNumbers).subscribe(
      data => console.log(data)
    );
  }
}
