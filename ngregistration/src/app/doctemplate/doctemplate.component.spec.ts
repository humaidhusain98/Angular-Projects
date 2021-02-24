import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctemplateComponent } from './doctemplate.component';

describe('DoctemplateComponent', () => {
  let component: DoctemplateComponent;
  let fixture: ComponentFixture<DoctemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
