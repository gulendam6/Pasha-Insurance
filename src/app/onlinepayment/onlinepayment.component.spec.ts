import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinepaymentComponent } from './onlinepayment.component';

describe('OnlinepaymentComponent', () => {
  let component: OnlinepaymentComponent;
  let fixture: ComponentFixture<OnlinepaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinepaymentComponent]
    });
    fixture = TestBed.createComponent(OnlinepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
