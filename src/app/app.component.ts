import { ListService } from './services/list.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';


@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet, HeaderComponent,HttpClientModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  nome:string = ''
  dadoPai :string = "Dado Pai";
  poke: any[] = [];

  constructor(private service: ListService,


  ) {

  }

  OnInit(): void {



  }



}
