import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css',
  standalone:true
})
export class ChangeNumberComponent {
  @Output() changeNumer: EventEmitter<any> = new EventEmitter

  handleClick(){
    
  
  }

}
