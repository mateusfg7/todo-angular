import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [TodoListComponent, TodoItemComponent],
  declarations: [TodoComponent],
  providers: [TodoService],
  exports: [TodoComponent],
})
export class TodoModule {}
