import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css',
  standalone:true
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.changeNumber.emit();
  
  }

}
