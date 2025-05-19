import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-if-render',
  imports: [CommonModule],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
  ,standalone: true,
})
export class IfRenderComponent {
  canShow:boolean = false;
  name:string = "Angulaar"


  mostrar(){

    if (!this.canShow) {
      this.canShow = true
    }else{
   this.canShow = false

    }
  }
}
