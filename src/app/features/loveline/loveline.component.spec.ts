import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovelineComponent } from './loveline.component';

describe('LovelineComponent', () => {
  let component: LovelineComponent;
  let fixture: ComponentFixture<LovelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LovelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LovelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
