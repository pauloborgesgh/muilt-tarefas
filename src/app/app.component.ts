import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet, HeaderComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  nome:string = ''
  dadoPai :string = "Dado Pai";





}
