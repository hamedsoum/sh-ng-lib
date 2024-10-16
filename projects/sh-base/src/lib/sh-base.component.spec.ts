import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShBaseComponent } from './sh-base.component';

describe('ShBaseComponent', () => {
  let component: ShBaseComponent;
  let fixture: ComponentFixture<ShBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
