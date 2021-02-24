import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtutComponent } from './newtut.component';

describe('NewtutComponent', () => {
  let component: NewtutComponent;
  let fixture: ComponentFixture<NewtutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
