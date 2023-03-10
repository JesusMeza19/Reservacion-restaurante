import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReserComponent } from './form-reser.component';

describe('FormReserComponent', () => {
  let component: FormReserComponent;
  let fixture: ComponentFixture<FormReserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
