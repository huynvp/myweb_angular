import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistadminComponent } from './todolistadmin.component';

describe('TodolistadminComponent', () => {
  let component: TodolistadminComponent;
  let fixture: ComponentFixture<TodolistadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
