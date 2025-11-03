import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent implements OnInit, OnDestroy {
  name = 'Mult-Function';

  currentTime: string = '';
  private _timerId: any;
  private _timerSub?: Subscription;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.updateTime();
    // usar RxJS interval dentro do NgZone para garantir que o Angular detecte as mudanças
    this.ngZone.run(() => {
      this._timerSub = interval(1000).subscribe(() => {
        this.updateTime();
        // forçar verificação de mudanças caso necessário
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

  private updateTime() {
    const now = new Date();
    // forçar formato HH:MM:SS com zeros à esquerda para garantir atualização dos segundos
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    this.currentTime = `${hh}:${mm}:${ss}`;
  }
}
