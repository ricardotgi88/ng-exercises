import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  meuNome = 'App Component';
  
  onClick(): void {
    this.meuNome = 'App Component';
  }

  onClickFilho(segundoParam: number, text:string): void {
    console.log(text, segundoParam);
  }
}
