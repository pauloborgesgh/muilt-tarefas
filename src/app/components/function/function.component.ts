import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CdkAccordionModule, CdkAccordionItem } from '@angular/cdk/accordion';
import { FormsModule } from '@angular/forms';




@Component({
  imports: [CommonModule, CdkAccordionModule, CdkAccordionItem, FormsModule],

  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css'],
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

  // --- Conversões básicas ---
  // Temperatura
  tempInput: number | null = null;
  tempResult: number | null = null;
  tempDirection: 'CtoF' | 'FtoC' = 'CtoF';

  // Comprimento
  lengthInput: number | null = null;
  lengthResult: number | null = null;
  lengthDirection: 'kmToMi' | 'miToKm' = 'kmToMi';

  // Moeda (exemplo BRL <-> USD)
  currencyInput: number | null = null;
  currencyResult: number | null = null;
  exchangeRate: number = 0.2; // exemplo: 1 BRL = 0.2 USD (ajuste conforme necessário)
  currencyDirection: 'BRLtoUSD' | 'USDtoBRL' = 'BRLtoUSD';

  convertTemperature() {
    if (this.tempInput == null) return;
    if (this.tempDirection === 'CtoF') {
      this.tempResult = (this.tempInput * 9) / 5 + 32;
    } else {
      this.tempResult = ((this.tempInput - 32) * 5) / 9;
    }
  }

  convertLength() {
    if (this.lengthInput == null) return;
    if (this.lengthDirection === 'kmToMi') {
      this.lengthResult = this.lengthInput * 0.621371;
    } else {
      this.lengthResult = this.lengthInput / 0.621371;
    }
  }

  convertCurrency() {
    if (this.currencyInput == null) return;
    if (this.currencyDirection === 'BRLtoUSD') {
      this.currencyResult = this.currencyInput * this.exchangeRate;
    } else {
      this.currencyResult = this.currencyInput / this.exchangeRate;
    }
  }
}
