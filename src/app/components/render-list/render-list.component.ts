import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-render-list',
  imports: [CommonModule],
  providers: [],
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css'],
  standalone: true
})
<<<<<<< HEAD
export class RenderListComponent implements OnInit {


 ngOnInit(): void {
=======
export class RenderListComponent implements OnInit, OnDestroy {
>>>>>>> develop



  constructor( ) {}

  ngOnInit(): void {

    };


  ngOnDestroy(): void {
  }
<<<<<<< HEAD
  constructor(private listservice:ListService ){
   
  }

=======
>>>>>>> develop
}
