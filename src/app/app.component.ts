import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TemplateComponent } from "./components/template/template.component";

import {IfRenderComponent} from './components/if-render/if-render.component';
import {EventosComponent} from './components/eventos/eventos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TemplateComponent, IfRenderComponent, EventosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {

  dadoPai :string = "Dado Pai";

}
