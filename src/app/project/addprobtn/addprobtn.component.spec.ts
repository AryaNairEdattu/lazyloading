import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprobtnComponent } from './addprobtn.component';

describe('AddprobtnComponent', () => {
  let component: AddprobtnComponent;
  let fixture: ComponentFixture<AddprobtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprobtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprobtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
