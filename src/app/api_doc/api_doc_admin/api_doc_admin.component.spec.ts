import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocAdmiComponent } from './api_doc_admin.component';

describe('ChangeInfoComponent', () => {
  let component: ApiDocAdmiComponent;
  let fixture: ComponentFixture<ApiDocAdmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocAdmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
