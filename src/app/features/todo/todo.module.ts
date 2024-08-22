import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodoComponent, TodoListComponent, TodoItemComponent],
  providers: [TodoService],
  exports: [TodoComponent],
})
export class TodoModule {}
