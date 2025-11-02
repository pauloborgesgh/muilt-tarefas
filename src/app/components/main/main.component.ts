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

poke = {
  nome: '',
  url: '',
  id: 0,
  types: [],
  sprites: {
    front_default: ''
  },
  items: [],
  abilities: [],

}
  constructor(private services: ListService) { }

  ngOnInit(): void {
    this.services.getPokemonList().subscribe((data) => {
      console.log(data);
      this.poke = data.results;
      console.log(this.poke);
    }, (error) => {
      console.error('Error fetching Pokémon list:', error);
    });
  }


}
