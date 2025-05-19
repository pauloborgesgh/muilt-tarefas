import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TemplateComponent } from "./components/template/template.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {

}
