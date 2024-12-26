import { TestBed } from '@angular/core/testing';

import { ImagemanipulationService } from './imagemanipulation.service';

describe('ImagemanipulationService', () => {
  let service: ImagemanipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagemanipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
