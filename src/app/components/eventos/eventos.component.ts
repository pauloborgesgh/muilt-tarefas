import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ChangeNumberComponent } from './change-number/change-number.component';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule,ChangeNumberComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
  standalone: true,
})
export class EventosComponent {
  mensagem: boolean = false;
  Number:number = 0

  showMessage(): void {
    this.mensagem = true;

  }
  onChangeNumber(){
    this.Number = Math.floor(Math.random() *50)
    console.log(this.Number)
    
  }

}
