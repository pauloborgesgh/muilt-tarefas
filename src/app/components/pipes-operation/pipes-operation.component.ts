import { Component } from '@angular/core';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipes-operation',
  imports: [
    TitleCasePipe,

  ],
  templateUrl: './pipes-operation.component.html',
  styleUrls: ['./pipes-operation.component.css'],
  standalone: true

})
export class PipesOperationComponent {
  p:string = 'operando com pipes';
  text :string = 'al';


}
