import { TestBed } from '@angular/core/testing';

import { UpdateIpoService } from './update-ipo.service';

describe('UpdateIpoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateIpoService = TestBed.get(UpdateIpoService);
    expect(service).toBeTruthy();
  });
});
