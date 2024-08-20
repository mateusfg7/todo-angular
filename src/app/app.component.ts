import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TodoModule } from './features/todo/todo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TodoModule],
  template: ` <app-todo /> `,
})
export class AppComponent {}
