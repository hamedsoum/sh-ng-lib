import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShCoreComponent } from './sh-core.component';

describe('ShCoreComponent', () => {
  let component: ShCoreComponent;
  let fixture: ComponentFixture<ShCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
