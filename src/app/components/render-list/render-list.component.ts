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
  animalDetails:string = ''
    animals :Animal[] =[];
    nome:string = ''
    tipo:string = ''
    idade:number = 0
    hability1 :string = ''
    hability2 :string = ''

 ngOnInit(): void {



  }
  constructor(private listservice:ListService ){
    this.getAnimal()
  }

  showAge(animal: Animal): void{
    this.animalDetails = `o Pat ${animal.name} Tem ${animal.idade} anos`

    }

 removeAnimal(animal:Animal){
 this.animals =  this.listservice.remove(this.animals,animal)


 }
getAnimals():void{
  this.listservice.getAll().subscribe((animals) => {
    this.animals = animals
  })
}
getAnimal():void{
  this.listservice.getAll().subscribe((animals) => {
   this.animals = animals
  })
}
}
