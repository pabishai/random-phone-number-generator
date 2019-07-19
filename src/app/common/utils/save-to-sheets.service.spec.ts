import { TestBed } from '@angular/core/testing';

import { SaveToSheetsService } from './save-to-sheets.service';

describe('SaveToSheetsService', () => {
  let sheetsService: SaveToSheetsService;
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SaveToSheetsService]});
    sheetsService = TestBed.get(SaveToSheetsService);
  });

  it('should be created', () => {
    expect(sheetsService).toBeTruthy();
  });

  it('should call save as excell sheet', () => {
    const saveAsExcel = sheetsService['_saveAsExcel'] = jasmine.createSpy('I work');
    sheetsService.exportDataToExcel([{index: 1, number: '0900000000'}], 'test_numbers');
    expect(saveAsExcel).toHaveBeenCalledTimes(1);
  });
});
