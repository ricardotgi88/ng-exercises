import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonBreakComponent } from './prison-break.component';

describe('PrisonBreakComponent', () => {
  let component: PrisonBreakComponent;
  let fixture: ComponentFixture<PrisonBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrisonBreakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrisonBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
