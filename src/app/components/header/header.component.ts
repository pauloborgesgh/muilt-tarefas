import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, DialogComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
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
  }
}
function openDialog() {
  throw new Error('Function not implemented.');
}

