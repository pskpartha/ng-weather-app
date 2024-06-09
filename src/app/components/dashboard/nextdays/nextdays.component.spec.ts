import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextdaysComponent } from './nextdays.component';

describe('NextdaysComponent', () => {
  let component: NextdaysComponent;
  let fixture: ComponentFixture<NextdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextdaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
