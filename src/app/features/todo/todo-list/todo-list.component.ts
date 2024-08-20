import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Todo } from '../models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  imports: [CommonModule, TodoItemComponent],
})
export class TodoListComponent {
  @Input() todos!: Todo[];
  @Input() onTodoToggle!: (id: number, completed: boolean) => void;

  handleTodoToggle(id: number, completed: boolean) {
    this.onTodoToggle(id, completed);
  }
}
