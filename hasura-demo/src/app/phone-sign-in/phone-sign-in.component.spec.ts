import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSignInComponent } from './phone-sign-in.component';

describe('PhoneSignInComponent', () => {
  let component: PhoneSignInComponent;
  let fixture: ComponentFixture<PhoneSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
