// src/app/pages/todo/todo.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../models/task.model';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  taskForm: FormGroup;
  tasks: Task[] = [];
  searchText = '';
  filter: 'all' | 'pending' | 'completed' = 'all';

  constructor(private fb: FormBuilder, private todoService: TodoService, public auth: AuthService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['']
    });
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.todoService.getAll();
  }

  addTask(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    const { title, description, dueDate } = this.taskForm.value;
    const newTask: Task = { id: uuidv4(), title, description, completed: false, createdAt: Date.now(), dueDate };
    this.todoService.add(newTask);
    this.taskForm.reset();
    this.loadTasks();
  }

  toggleComplete(task: Task): void {
    this.todoService.update({ ...task, completed: !task.completed });
    this.loadTasks();
  }

  deleteTask(id: string): void {
    this.todoService.delete(id);
    this.loadTasks();
  }

  logout(): void {
    this.auth.logout();
  }

  get filteredTasks(): Task[] {
    let list = this.tasks.slice();
    if (this.filter === 'pending') list = list.filter(t => !t.completed);
    if (this.filter === 'completed') list = list.filter(t => t.completed);
    if (this.searchText.trim()) {
      const s = this.searchText.toLowerCase();
      list = list.filter(t => (t.title + ' ' + (t.description || '')).toLowerCase().includes(s));
    }
    list.sort((a, b) => (b.createdAt - a.createdAt));
    return list;
  }

  applyFilter(filter?: 'all' | 'pending' | 'completed'): void {
    if (filter) this.filter = filter;
    this.loadTasks();
  }
}
