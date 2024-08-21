import { Component, Input } from '@angular/core';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() toggleTodo!: (id: number, completed: boolean) => void;
}
