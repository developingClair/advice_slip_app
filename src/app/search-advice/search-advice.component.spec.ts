import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdviceComponent } from './search-advice.component';

describe('SearchAdviceComponent', () => {
  let component: SearchAdviceComponent;
  let fixture: ComponentFixture<SearchAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
