import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  standalone: true,
})
export class TemplateComponent {

  @Input() dado: string = " ";
  @Input() dado_m: string = " ";

  title: string = "Template Card"
  nome: string  = "João"
  age: number = 32
  role : string = "Eletricista"



}
