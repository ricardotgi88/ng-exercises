import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  data: any;
  paramId = '';
  form!: FormGroup;
  subscriptions = new Subscription();

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm();
    
    this.data = this.route.snapshot.data;
    this.paramId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  displayError(controlName: string, validator: string): boolean {
    const errors = this.form.controls[controlName].errors;
    
    if (errors) {
      console.log('ERROR: ', errors[validator]);
    }

    return this.form.controls[controlName].touched && errors && errors[validator];
  }

  private setupForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [21, Validators.min(20)],
      descricao: [],
      // categorias: this.fb.array([
      //   this.fb.group({
      //     nome: ['', Validators.required],
      //     tipo: ['beginner', Validators.required],
      //   }),
      //   this.fb.group({
      //     nome: ['', Validators.required],
      //     tipo: ['beginner', Validators.required],
      //   }),
      //   this.fb.group({
      //     nome: ['', Validators.required],
      //     tipo: ['beginner', Validators.required],
      //   }),
      //   this.fb.group({
      //     nome: ['', Validators.required],
      //     tipo: ['beginner', Validators.required],
      //   }),
      //   this.fb.group({
      //     nome: ['', Validators.required],
      //     tipo: ['beginner', Validators.required],
      //   }),
      // ]),
    });

    /**
     * Itens relevantes sobre forms:
     *  this.form.getRawValue();
     *  this.form.value;
     * 
     *  this.form.controls["nomeControl"].valid;
     *  this.form.controls["nomeControl"].dirty;
     *  this.form.controls["nomeControl"].touched;
     *  this.form.controls["nomeControl"].untouched;
     *  this.form.controls["nomeControl"].disabled;
     *  this.form.controls["nomeControl"].invalid;
     *  this.form.controls["nomeControl"].enabled;

     *  this.form.controls["nomeControl"].enable();
     *  this.form.controls["nomeControl"].disable();
     * 
     *  this.form.controls["nomeControl"].markAsDirty();
     *  this.form.controls["nomeControl"].markAsPristine();
     * 
     *  this.form.controls["nomeControl"].markAsTouched();
     *  this.form.controls["nomeControl"].markAsUntouched();
     *  this.form.markAllAsTouched();

     *  this.form.patchValue({});
     *  this.form.setValue({});
     * 
     *  this.form.controls["nomeControl"].errors;
     */

    // this.fb.this.form.errors;

    const nameChanges = this.form.controls['name'].valueChanges
      .pipe(
        debounceTime(200),
        tap((value) => {
          console.log('Nome: ', value);
          this.form.controls['descricao'].setValue(value);
        })
      )
      .subscribe();

    this.subscriptions.add(nameChanges);

    console.log('form.errors', this.form.errors);
  }
}
