import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-max-operation-count',
  templateUrl: './max-operation-count.component.html',
  styleUrls: ['./max-operation-count.component.scss'],
})
export class MaxOperationCountComponent {
  form!: FormGroup;
  maxNumberOfOperations!: number;
  constructor(private fb: FormBuilder) {
    this.initialiseForm();
  }
  initialiseForm() {
    this.maxNumberOfOperations = 0;
    this.form = this.fb.group({
      breakEven: this.fb.control(''),
      numbers: this.fb.array([this.fb.control(''), this.fb.control('')]),
    });
  }

  get breakEven() {
    return this.form.get('breakEven') as FormControl;
  }

  get numbers() {
    return this.form.get('numbers') as FormArray;
  }

  addNumber() {
    this.numbers.push(this.fb.control(''));
  }

  onSubmit() {
    // turn all items to number type
    const numbers = this.numbers.value.map((val: string) => parseInt(val));
    const breakEven = parseInt(this.breakEven.value);

    this.maxNumberOfOperations = this.maxOperations(numbers, breakEven);
  }

  /**
   * Logic used:
   * sort the array in non-decreasing order
   *  and then start from the beginning of the array
   *  check if the difference between the current element and  the next element is at least the breakeven value.
   * If it is, we  remove both elements and increment our counter.
   * We  then continue this process with the new array until we reach the end of the array or there are no more pairs that satisfy the condition.
   *
   * Sample inputs and outputs
   *  [1, 5, 2, 3, 4, 1] , 3 ==> 2
   *
   */

  maxOperations(providedNumbers: number[], breakEven: number): number {
    let count = 0;
    providedNumbers = providedNumbers.sort();
    // console.log(providedNumbers);

    for (
      let firstIndex = 0;
      firstIndex < providedNumbers.length;
      firstIndex++
    ) {
      for (
        let secondIndex = firstIndex + 1;
        secondIndex < providedNumbers.length;
        secondIndex++
      ) {
        if (
          Math.abs(
            providedNumbers[firstIndex] - providedNumbers[secondIndex]
          ) >= breakEven
        ) {
          // create a new array that is a copy of the passed in  array.
          let newArr = providedNumbers.slice();
          // remove the two elements from the new array that meet the criteria.
          newArr.splice(secondIndex, 1);
          newArr.splice(firstIndex, 1);
          //  call function with the new array and increment the count by 1.
          let operations = 1 + this.maxOperations(newArr, breakEven);

          count = Math.max(count, operations);
        }
      }
    }
    return count;
  }
}
