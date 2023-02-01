import { TestBed } from '@angular/core/testing';

import { RezervoirService } from './rezervoir.service';

describe('RezervoirService', () => {
  let service: RezervoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezervoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
