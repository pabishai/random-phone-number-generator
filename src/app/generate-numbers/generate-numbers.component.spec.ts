import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNumbersComponent } from './generate-numbers.component';

describe('GenerateNumbersComponent', () => {
  let component: GenerateNumbersComponent;
  let fixture: ComponentFixture<GenerateNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
