// src/app/services/todo.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private STORAGE_KEY = 'tasks';

  getAll(): Task[] {
    const tasks = localStorage.getItem(this.STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
  }

  add(task: Task): void {
    const tasks = this.getAll();
    tasks.push(task);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }

  update(updatedTask: Task): void {
    let tasks = this.getAll();
    tasks = tasks.map(t => t.id === updatedTask.id ? updatedTask : t);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }

  delete(id: string): void {
    const tasks = this.getAll().filter(t => t.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }
}
