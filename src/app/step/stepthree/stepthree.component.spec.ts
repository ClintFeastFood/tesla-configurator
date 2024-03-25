import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepthreeComponent } from './stepthree.component';

describe('StepthreeComponent', () => {
  let component: StepthreeComponent;
  let fixture: ComponentFixture<StepthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepthreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
