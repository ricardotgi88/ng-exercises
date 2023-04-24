import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxOperationCountComponent } from './max-operation-count.component';

describe('MaxOperationCountComponent', () => {
  let component: MaxOperationCountComponent;
  let fixture: ComponentFixture<MaxOperationCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxOperationCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxOperationCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
