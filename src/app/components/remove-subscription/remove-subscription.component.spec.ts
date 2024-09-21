import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSubscriptionComponent } from './remove-subscription.component';

describe('RemoveSubscriptionComponent', () => {
  let component: RemoveSubscriptionComponent;
  let fixture: ComponentFixture<RemoveSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
