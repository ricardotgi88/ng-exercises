import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-prison-break',
  templateUrl: './prison-break.component.html',
  styleUrls: ['./prison-break.component.scss']
})
export class PrisonBreakComponent implements OnInit {

  form: FormGroup;
  matrix: number[][] = [];
  matrixCount  = 0;
  escapePath = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rows: this.fb.array([

        this.fb.array([
        this.fb.control('')
        ])



      ])
    });
  }
  get rows() {
    return this.form.get('rows') as FormArray;
  }

  getRowArray(index: number) {
    return this.form.get('rows')?.get(index +'') as FormArray;
  }

  addCells(){
    this.addRow()
    this.addColumn()
  }


  addRow() {

const colNums = this.getRowArray(0).length

    this.rows.push(this.fb.array(Array.from({ length: colNums }, () => this.fb.control(''))));

  }

  addColumn(): void {
 // const rows =  this.rows.

 this.rows.controls.forEach(row  => {
    (row as FormArray).push( this.fb.control(''))
 });


  }

  onSubmit(): void {
    this.matrix = this.form.value.rows;
    this.matrixCount = this.matrix.length;
    this.escapePath = this.calculateEscapePath();
  }
  calculateEscapePath(): number {

    return 1
  }



  ngOnInit(): void {
  }

}
