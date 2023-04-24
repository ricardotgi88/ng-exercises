import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public abc: string = '';
  public bca = '';

  // @Input() nomeCompPai: string = '';
  // @Output() nomeCompPaiChange = new EventEmitter<string>();

  // @Output() clicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }
  
  // onClickHome():void {
  //   this.nomeCompPaiChange.emit('batma');
  //   this.clicked.emit('clicou no filho');
  // }

}
