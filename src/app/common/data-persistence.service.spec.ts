import { TestBed } from '@angular/core/testing';

import { DataPersistenceService } from './data-persistence.service';

describe('DataPersistenceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPersistenceService = TestBed.get(DataPersistenceService);
    expect(service).toBeTruthy();
  });
});
