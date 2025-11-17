import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggle } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink,MatSlideToggle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  name = 'Mult-Function';

  private document = inject(DOCUMENT);
  theme: 'classic' | 'cyber' = 'classic';

  ngOnInit(): void {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'cyber') {
      this.applyTheme('cyber');
    } else {
      this.applyTheme('classic');
    }
  }

  toggleTheme(): void {
    this.applyTheme(this.theme === 'classic' ? 'cyber' : 'classic');
  }

  private applyTheme(theme: 'classic' | 'cyber'): void {
    this.theme = theme;
    const body = this.document?.body;
    if (!body) return;
    body.classList.remove('theme-cyber');
    if (theme === 'cyber') {
      body.classList.add('theme-cyber');
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }
}
