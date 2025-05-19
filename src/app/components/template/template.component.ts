import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
  standalone: true,
})
export class TemplateComponent {

  title: string = "Template Card"
  nome: string  = "João"
  age: number = 32
  role : string = "Eletricista"



}
