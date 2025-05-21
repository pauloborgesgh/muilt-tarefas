import { Component } from '@angular/core';
import { ChangeNumberComponent } from "../change-number/change-number.component";

@Component({
  selector: 'app-emiter',
  imports: [ChangeNumberComponent],
  templateUrl: './emiter.component.html',
  styleUrl: './emiter.component.css',
  standalone:true
})
export class EmiterComponent {
  myNumber:number  = 0

  onChangeNumer(){
    this.myNumber = Math.floor(Math.random() *50)
    
  }

}
