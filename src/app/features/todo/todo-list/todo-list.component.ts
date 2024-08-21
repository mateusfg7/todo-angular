import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @Input() todos!: Todo[];
  @Input() toggleCompleted!: (id: number, completed: boolean) => void;
}
