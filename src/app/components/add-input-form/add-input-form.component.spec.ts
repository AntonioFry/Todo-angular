import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputFormComponent } from './add-input-form.component';

describe('AddInputFormComponent', () => {
  let component: AddInputFormComponent;
  let fixture: ComponentFixture<AddInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
