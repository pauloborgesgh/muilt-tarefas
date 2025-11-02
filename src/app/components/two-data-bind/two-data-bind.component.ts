import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-two-data-bind',
  imports: [FormsModule,CommonModule],
  templateUrl: './two-data-bind.component.html',
  styleUrl: './two-data-bind.component.css'
  ,standalone: true,
})
export class TwoDataBindComponent {
name :string = ' ';


clear(){
  this.name = '';
}
}
