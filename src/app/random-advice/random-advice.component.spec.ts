import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAdviceComponent } from './random-advice.component';

describe('RandomAdviceComponent', () => {
  let component: RandomAdviceComponent;
  let fixture: ComponentFixture<RandomAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
