import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFeedbackComponent } from './contact-feedback.component';

describe('ContactFeedbackComponent', () => {
  let component: ContactFeedbackComponent;
  let fixture: ComponentFixture<ContactFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
