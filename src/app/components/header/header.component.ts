import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent {
  name = 'Mult-Function';
}
