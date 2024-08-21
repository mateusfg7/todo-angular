import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Buy milk',
      date: new Date().toISOString(),
      completed: false,
    },
    {
      id: 2,
      title: 'Buy bread',
      date: new Date().toISOString(),
      completed: true,
    },
    {
      id: 3,
      title: 'Buy cheese',
      date: new Date().toISOString(),
      completed: false,
    },
  ];
  private trash: Todo[] = [];
  private localStorageKey = 'todos';

  constructor() {
    this.getFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.todos));
  }
  private getFromLocalStorage() {
    const localStorageData = localStorage.getItem(this.localStorageKey);

    if (!localStorageData) return;

    this.todos = JSON.parse(localStorageData);
  }

  add(todo: Todo) {
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  remove(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      return;
    }

    this.trash.push(todo);

    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveToLocalStorage();
  }

  toggleCompleted(id: number, completed: boolean) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }

      return todo;
    });

    this.saveToLocalStorage();
  }

  getTodos() {
    return this.todos;
  }

  getTrash() {
    return this.trash;
  }

  restore(id: number) {
    const todo = this.trash.find((todo) => todo.id === id);

    if (!todo) {
      return;
    }

    this.todos.push(todo);
    this.saveToLocalStorage();

    this.trash = this.trash.filter((todo) => todo.id !== id);
  }
}
