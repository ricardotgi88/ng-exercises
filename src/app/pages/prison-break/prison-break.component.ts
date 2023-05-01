import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-prison-break',
  templateUrl: './prison-break.component.html',
  styleUrls: ['./prison-break.component.scss'],
})
export class PrisonBreakComponent {
  form!: FormGroup;
  escapePath = 0;

  constructor(private fb: FormBuilder) {
    this.initialiseForm();
  }

  initialiseForm() {
    this.form = this.fb.group({
      rows: this.fb.array([
        this.fb.array([this.fb.control(''), this.fb.control('')]),
        this.fb.array([this.fb.control(''), this.fb.control('')]),
      ]),
    });
  }
  onSubmit(): void {
    this.escapePath = this.calculateEscapePath(this.form.value.rows);
  }

  calculateEscapePath(matrix: any): number {
    console.log(matrix);
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const dp = Array.from({ length: numRows + 1 }, () =>
      Array(numCols + 1).fill(0)
    );
    dp[0][1] = 1;
    for (let row = 1; row <= numRows; row++) {
      for (let col = 1; col <= numCols; col++) {
        if (parseInt(matrix[row - 1][col - 1]) === 0) {
          dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
        }
      }
    }
    return dp[numRows][numCols];
  }

  get rows() {
    return this.form.get('rows') as FormArray;
  }
  addCells() {
    this.addRow();
    this.addColumn();
  }

  getRowArray(index: number) {
    return this.rows.get(index + '') as FormArray;
  }

  addRow() {
    const colNums = this.getRowArray(0).length;

    this.rows.push(
      this.fb.array(Array.from({ length: colNums }, () => this.fb.control('')))
    );
  }

  addColumn(): void {
    this.rows.controls.forEach((row) => {
      (row as FormArray).push(this.fb.control(''));
    });
  }
}
