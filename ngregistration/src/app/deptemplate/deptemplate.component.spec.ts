import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptemplateComponent } from './deptemplate.component';

describe('DeptemplateComponent', () => {
  let component: DeptemplateComponent;
  let fixture: ComponentFixture<DeptemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
