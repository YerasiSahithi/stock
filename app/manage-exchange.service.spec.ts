import { TestBed } from '@angular/core/testing';

import { ManageExchangeService } from './manage-exchange.service';

describe('ManageExchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageExchangeService = TestBed.get(ManageExchangeService);
    expect(service).toBeTruthy();
  });
});
