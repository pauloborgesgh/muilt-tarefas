import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
  standalone: true,
})
export class EventosComponent {
  mensagem: boolean = false;

  showMessage(): void {
    this.mensagem = true;

  }
}
