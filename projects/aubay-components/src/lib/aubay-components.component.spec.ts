import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AubayComponentsComponent } from './aubay-components.component';

describe('AubayComponentsComponent', () => {
  let component: AubayComponentsComponent;
  let fixture: ComponentFixture<AubayComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AubayComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AubayComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
