import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentsFormComponent } from './add-students-form.component';

describe('AddStudentsFormComponent', () => {
  let component: AddStudentsFormComponent;
  let fixture: ComponentFixture<AddStudentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
