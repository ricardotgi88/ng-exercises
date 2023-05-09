import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxOperationCountComponent } from './max-operation-count.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AubayComponentsModule } from 'projects/aubay-components/src/public-api';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('MaxOperationCountComponent', () => {
  let component: MaxOperationCountComponent;
  let fixture: ComponentFixture<MaxOperationCountComponent>;
  let compiled: HTMLElement;
  const defaultNumberInputs = 2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule, AubayComponentsModule, ReactiveFormsModule],
      declarations: [MaxOperationCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaxOperationCountComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  function checkDefaults() {
    component = fixture.componentInstance;
    fixture.detectChanges();

    let breakEven = component.breakEven;
    let numbers = component.numbers;
    let maxNumberOfOperations = component.maxNumberOfOperations;

    expect(breakEven.value).toBeFalsy();
    expect(numbers.length).toBe(defaultNumberInputs);
    expect(maxNumberOfOperations).toBe(0);
  }

  it('should use default values for inputs and response ', checkDefaults);

  function addCells() {
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    const addCellButton = compiled.querySelector(
      '[data-testid="addCells"]'
    ) as HTMLElement;

    addCellButton?.click();
    fixture.detectChanges();

    const newInputsCount = defaultNumberInputs + 1;

    const inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');
    expect(inputCells.length).toBe(newInputsCount);
  }
  it('should add extra input when add addCell is clicked', addCells);

  it('should reset to default when reset is clicked', () => {
    addCells();
    compiled = fixture.nativeElement as HTMLElement;

    const resetButton = compiled.querySelector(
      '[data-testid="resetButton"]'
    ) as HTMLElement;

    resetButton?.click();
    fixture.detectChanges();
    checkDefaults();
  });

  it('should calculate max operation when calculate is clicked', () => {
    component = fixture.componentInstance;
    const formBuilder = fixture.debugElement.injector.get(FormBuilder);

    component.form = formBuilder.group({
      breakEven: formBuilder.control('3'),
      numbers: formBuilder.array(
        [1, 5, 2, 3, 4, 1].map((num) => formBuilder.control(num))
      ),
    });

    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    const calculateButton = compiled.querySelector(
      '[data-testid="calculateMaxOperation"]'
    ) as HTMLButtonElement;

    expect(component.maxNumberOfOperations).toBeFalsy();

    calculateButton?.click();

    fixture.detectChanges();

    expect(component.maxNumberOfOperations).toBe(2);

    const displayedOutput = compiled.querySelector(
      '[data-testid="displayedOutput"]'
    ) as HTMLElement;

    expect(displayedOutput.textContent).toBe('2');
  });

  // it('should reset to default when reset is clicked', () => {
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   compiled = fixture.nativeElement as HTMLElement;

  //   const addCellButton = compiled.querySelector(
  //     '[data-testid="addCells"]'
  //   ) as HTMLElement;
  //   const resetButton = compiled.querySelector(
  //     '[data-testid="resetButton"]'
  //   ) as HTMLElement;
  //   let inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');

  //   addCellButton?.click();
  //   fixture.detectChanges();
  //   const newRowsCount = defaultRowAndCol + 1;

  //   inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');
  //   expect(inputCells.length).toBe(newRowsCount ** 2);

  //   resetButton?.click();
  //   fixture.detectChanges();

  //   inputCells = compiled.querySelectorAll('[data-testid="cellInputs"]');
  //   expect(inputCells.length).toBe(defaultRowAndCol ** 2);
  // });
});
