import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JohtoComponent } from './johto';

describe('JohtoComponent', () => {
  let component: JohtoComponent;
  let fixture: ComponentFixture<JohtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JohtoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});