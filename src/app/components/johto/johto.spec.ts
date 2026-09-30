import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Johto } from './johto';

describe('Johto', () => {
  let component: Johto;
  let fixture: ComponentFixture<Johto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Johto],
    }).compileComponents();

    fixture = TestBed.createComponent(Johto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
