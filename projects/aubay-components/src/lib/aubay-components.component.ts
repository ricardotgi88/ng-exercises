import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-aubay-components',
  template: `
    <p>
      aubay-components works! yeah
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AubayComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger;
  }

}
