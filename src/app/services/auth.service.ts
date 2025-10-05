// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  fullName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private STORAGE_KEY = 'users';
  private LOGGED_IN_KEY = 'currentUser';

  constructor(private router: Router) {}

  signup(user: User): boolean {
    const users = this.getUsers();
    if (users.find(u => u.email === user.email)) return false;
    users.push(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.getUsers().find(u => u.email === email && u.password === password);
    if (!user) return false;
    localStorage.setItem(this.LOGGED_IN_KEY, JSON.stringify(user));
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.LOGGED_IN_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.LOGGED_IN_KEY);
  }

  currentUser(): User | null {
    const user = localStorage.getItem(this.LOGGED_IN_KEY);
    return user ? JSON.parse(user) : null;
  }

  private getUsers(): User[] {
    const users = localStorage.getItem(this.STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  }
}
