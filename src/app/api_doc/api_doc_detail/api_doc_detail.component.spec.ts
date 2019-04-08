import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocDetailComponent } from './api_doc_detail.component';

describe('ChangeInfoComponent', () => {
  let component: ApiDocDetailComponent;
  let fixture: ComponentFixture<ApiDocDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
