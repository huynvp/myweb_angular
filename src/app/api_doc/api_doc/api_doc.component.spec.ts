import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocComponent } from './api_doc.component';

describe('ChangeInfoComponent', () => {
  let component: ApiDocComponent;
  let fixture: ComponentFixture<ApiDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
