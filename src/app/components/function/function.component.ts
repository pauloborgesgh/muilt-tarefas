import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CdkAccordionModule, CdkAccordionItem } from '@angular/cdk/accordion';




@Component({
  imports: [CommonModule, CdkAccordionModule,CdkAccordionItem],
 
  templateUrl: './function.component.html',
  styleUrl: './function.component.css',
  standalone: true,
})
export class FunctionComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  numeros: number[] = []; // Array para armazenar os números gerados

  // Função para gerar números aleatórios
  gerarNumeros() {
    this.numeros = []; // Limpa o array antes de gerar novos números
    for (let i = 0; i < 6; i++) {
      this.numeros.push(Math.floor(Math.random() * 100));
    }
    console.log('Números gerados:', this.numeros);
  }
}
