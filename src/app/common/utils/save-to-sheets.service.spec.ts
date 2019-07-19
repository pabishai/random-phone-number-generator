import { TestBed } from '@angular/core/testing';

import { SaveToSheetsService } from './save-to-sheets.service';

describe('SaveToSheetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveToSheetsService = TestBed.get(SaveToSheetsService);
    expect(service).toBeTruthy();
  });
});
