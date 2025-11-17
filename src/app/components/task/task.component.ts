import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-task',
  imports: [CommonModule, MatDividerModule, MatCheckboxModule, MatIconModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: true
})
export class TaskComponent implements OnInit {
tasks: { text: string; done: boolean }[] = [];
private storageKey = 'tasks';

ngOnInit(): void {
    try {
        if (typeof localStorage !== 'undefined') {
            const raw = localStorage.getItem(this.storageKey);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    this.tasks = parsed.filter((t) => t && typeof t.text === 'string')
                                       .map((t) => ({ text: String(t.text), done: !!t.done }));
                }
            }
        }
    } catch {}
}

  addTask(task: string): void {
    const value = (task ?? '').trim();
    if (!value) { return; }
    this.tasks.push({ text: value, done: false });
    this.saveTasks();
  }

  removeTask(task: { text: string; done: boolean } | string): void {
    const text = typeof task === 'string' ? task : task.text;
    this.tasks = this.tasks.filter(t => t.text !== text);
    this.saveTasks();
}

toggleDone(task: { text: string; done: boolean }): void {
    task.done = !task.done;
    this.saveTasks();
}

private saveTasks(): void {
    try {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
        }
    } catch {}
}

}
