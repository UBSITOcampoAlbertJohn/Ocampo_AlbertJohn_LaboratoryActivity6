import { TestBed } from '@angular/core/testing';
import { Hoenn } from './hoenn';

describe('Hoenn', () => {
  let service: Hoenn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hoenn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
