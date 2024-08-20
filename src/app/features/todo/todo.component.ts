import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Todo } from './models/todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  trash: Todo[] = [];

  @ViewChild('todoTitleInput') todoTitleInput!: ElementRef<HTMLInputElement>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    const todo: Todo = {
      id: this.todos.length + 1,
      date: new Date().toISOString(),
      completed: false,
      title: this.todoTitleInput.nativeElement.value.trim(),
    };

    this.todoService.add(todo);
    this.todos = this.todoService.getTodos();

    this.todoTitleInput.nativeElement.value = '';
  }

  removeTodo(id: number) {
    this.todoService.remove(id);

    this.todos = this.todoService.getTodos();
    this.trash = this.todoService.getTrash();
  }

  toggleCompleted(id: number, completed: boolean) {
    this.todoService.toggleCompleted(id, completed);
    this.todos = this.todoService.getTodos();
  }
}
