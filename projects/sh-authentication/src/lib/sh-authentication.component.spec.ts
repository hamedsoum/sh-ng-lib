import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShAuthenticationComponent } from './sh-authentication.component';

describe('ShAuthenticationComponent', () => {
  let component: ShAuthenticationComponent;
  let fixture: ComponentFixture<ShAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShAuthenticationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
