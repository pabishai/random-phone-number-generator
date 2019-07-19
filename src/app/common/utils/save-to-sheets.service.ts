import { Injectable } from '@angular/core';
import * as file from 'file-saver';
import * as xlsx from 'xlsx';
import { constants } from '../constants';

/**
 * Service to save data to excel sheet
 */
@Injectable({
  providedIn: 'root'
})
export class SaveToSheetsService {

  constructor() { }
  exportDataToExcel(json: any[], fileName: string): void {
    const worksheet: xlsx.WorkSheet = xlsx.utils.json_to_sheet(json);
    const workbook: xlsx.WorkBook = {
      Sheets: {'data': worksheet},
      SheetNames: ['data']
    };
    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array'});
    this._saveAsExcel(excelBuffer, fileName);
  }

  private _saveAsExcel(buffer: any, fileName: string): void {
    const timeStamp = new Date().valueOf().toString();
    const data: Blob = new Blob([buffer], {type: constants.EXCEL_TYPE});
    file.saveAs(data, fileName.concat('_', timeStamp));
  }
}
