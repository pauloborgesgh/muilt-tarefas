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
<<<<<<< HEAD
  imports: [FormsModule,RouterOutlet, HeaderComponent,FooterComponent,MainComponent],
=======
  imports: [FormsModule,RouterOutlet, HeaderComponent,HttpClientModule,FooterComponent],
>>>>>>> develop
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {

<<<<<<< HEAD

  constructor(
=======
  constructor(private service: ListService,

>>>>>>> develop

  ) {

  }

  OnInit(): void {



  }



}
