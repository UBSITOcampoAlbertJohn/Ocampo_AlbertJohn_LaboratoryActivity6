import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kanto } from './kanto';

describe('Kanto', () => {
  let component: Kanto;
  let fixture: ComponentFixture<Kanto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kanto],
    }).compileComponents();

    fixture = TestBed.createComponent(Kanto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
