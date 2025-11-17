import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../../Animal';
import { PipesOperationComponent } from "../pipes-operation/pipes-operation.component";
import { FunctionComponent } from "../function/function.component";
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-render-list',
  imports: [CommonModule],
  providers: [],
  templateUrl: './render-list.component.html',
  styleUrl: './render-list.component.css',
  standalone: true
})
export class RenderListComponent implements OnInit {


 ngOnInit(): void {



  }
  constructor(private listservice:ListService ){
   
  }

}
