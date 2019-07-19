import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { RandomNumbersService } from '../common/utils/random-numbers.service';
import { SaveToSheetsService } from '../common/utils/save-to-sheets.service';


@Component({
  selector: 'app-generate-numbers',
  templateUrl: './generate-numbers.component.html',
  styleUrls: ['./generate-numbers.component.sass']
})
export class GenerateNumbersComponent implements OnInit {
  displayedColumns: string[] = ['index', 'number'];
  maxPhoneNumber: string;
  minPhoneNumber: string;

  dataSource = new MatTableDataSource();

  // Form control
  phoneNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.max(10000),
  ]
  );

  constructor(private _randomNumberService: RandomNumbersService,
    private _saveToSheet: SaveToSheetsService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    // Adds sorting from the mat table
    this.dataSource.sort = this.sort;
  }

  /**
    *  This function gets the random numbers, maximum and minumum
  **/
  generatePhoneNumbers(): void {
    this.dataSource.data = [];
    this._randomNumberService.generatePhoneNumbers(this.phoneNumberFormControl.value);
    this.dataSource.data = this._randomNumberService.formattedPhoneNumber;
    this.maxPhoneNumber = '0'.concat(this._randomNumberService.maxNumber.toString());
    this.minPhoneNumber = '0'.concat(this._randomNumberService.minNumber.toString());
  }

  getError(): string {
    if (this.phoneNumberFormControl.getError('max')) {
      return 'I can only generate 10,000 numbers at a time';
    }
    if (this.phoneNumberFormControl.getError('required')) {
      return 'Please fill me in';
    }
  }

  saveToSheet() {
    this._saveToSheet.exportDataToExcel([...this.dataSource.data], 'generated_numbers');
  }

}
