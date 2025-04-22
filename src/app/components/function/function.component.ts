import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';




@Component({
  selector: 'app-function',
  imports: [CommonModule],
  templateUrl: './function.component.html',
  styleUrl: './function.component.css',
  standalone: true,
})
export class FunctionComponent {

  numeros: number[] = [];

  constructor() {
    console.log('FunctionComponent initialized');
  }

  ngOnInit() {
    console.log('FunctionComponent ngOnInit');
  }
gerarNumeros() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
      numeros.push(Math.floor(Math.random() * 100));
    }
    console.log('Números gerados:', numeros);
    return numeros;
  }
}
