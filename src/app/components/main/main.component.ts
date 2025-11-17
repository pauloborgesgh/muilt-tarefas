import { Component, Output, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  imports: [CommonModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  @Output() cmain:string = 'main deu certo'


  constructor(private services: ListService) { }

  ngOnInit(): void {

  }


}
