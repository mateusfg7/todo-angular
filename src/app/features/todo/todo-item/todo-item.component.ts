import { Component, Input } from '@angular/core';

import { Todo } from '../models/todo.model';

@Component({
  standalone: true,
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() onTodoToggle!: (id: number, completed: boolean) => void;
}
