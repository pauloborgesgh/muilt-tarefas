import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggle } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink,MatSlideToggle],
=======
import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, DialogComponent],
>>>>>>> develop
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
<<<<<<< HEAD
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
=======
export class HeaderComponent implements OnInit, OnDestroy {
  name: String = 'Mult-Function';

  currentTime: string = '';
  private _timerId: any;
  private _timerSub?: Subscription;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateTime();
    this.ngZone.run(() => {
      this._timerSub = interval(1000).subscribe(() => {
        this.updateTime();
        this.cdr.markForCheck();
      });
    });
  }

  ngOnDestroy(): void {
    if (this._timerId) {
      clearInterval(this._timerId);
    }
    if (this._timerSub) {
      this._timerSub.unsubscribe();
    }
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, { width: '420px' });
  }

  private updateTime(): void {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    this.currentTime = `${hh}:${mm}:${ss}`;
>>>>>>> develop
  }
}
function openDialog() {
  throw new Error('Function not implemented.');
}

