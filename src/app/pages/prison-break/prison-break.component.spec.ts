import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonBreakComponent } from './prison-break.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AubayComponentsModule } from 'projects/aubay-components/src/public-api';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PrisonBreakComponent', () => {
  let component: PrisonBreakComponent;
  let fixture: ComponentFixture<PrisonBreakComponent>;
  let compiled: HTMLElement;

  const defaultRowAndCol = 2;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule, AubayComponentsModule, ReactiveFormsModule],
      declarations: [PrisonBreakComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrisonBreakComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render default row and cols at first', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    let rows = component.form.value.rows;
    expect(rows.length).toBe(defaultRowAndCol);
    expect(rows[0].length).toBe(defaultRowAndCol);
    expect(rows[1].length).toBe(defaultRowAndCol);

    const inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');
    expect(inputCells.length).toBe(defaultRowAndCol ** 2);
  });

  it('should add extra row and cols when add addCell is clicked', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    const addCellButton = compiled.querySelector(
      '[data-testid="addCells"]'
    ) as HTMLElement;

    addCellButton?.click();
    fixture.detectChanges();

    const newRowsCount = defaultRowAndCol + 1;

    const inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');
    expect(inputCells.length).toBe(newRowsCount ** 2);
  });

  it('should reset the row and col to default when reset is clicked', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    const addCellButton = compiled.querySelector(
      '[data-testid="addCells"]'
    ) as HTMLElement;
    const resetButton = compiled.querySelector(
      '[data-testid="resetButton"]'
    ) as HTMLElement;
    let inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');

    addCellButton?.click();
    fixture.detectChanges();
    const newRowsCount = defaultRowAndCol + 1;

    inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');
    expect(inputCells.length).toBe(newRowsCount ** 2);

    resetButton?.click();
    fixture.detectChanges();

    inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');
    expect(inputCells.length).toBe(defaultRowAndCol ** 2);
  });

  it('should calculateEscapePath when calculate is clicked', () => {
    component = fixture.componentInstance;
    const formBuilder = fixture.debugElement.injector.get(FormBuilder);

    component.form = formBuilder.group({
      rows: formBuilder.array([
        formBuilder.array([formBuilder.control('0'), formBuilder.control('1')]),

        formBuilder.array([formBuilder.control('0'), formBuilder.control('0')]),
      ]),
    });

    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    const calculateEscapePathButton = compiled.querySelector(
      '[data-testid="calculateEscapePathButton"]'
    ) as HTMLButtonElement;

    expect(component.escapePath).toBeFalsy();

    calculateEscapePathButton?.click();

    fixture.detectChanges();

    expect(component.escapePath).toBe(1);

    const displayedEscapePath = compiled.querySelector(
      '[data-testid="escapePath"]'
    ) as HTMLElement;

    expect(displayedEscapePath.textContent).toBe('1');
  });
});
