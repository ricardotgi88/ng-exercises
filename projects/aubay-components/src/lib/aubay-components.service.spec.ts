import { TestBed } from '@angular/core/testing';

import { AubayComponentsService } from './aubay-components.service';

describe('AubayComponentsService', () => {
  let service: AubayComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AubayComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
