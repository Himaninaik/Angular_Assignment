# Angular_Assignment

# Angular To-Do App with Authentication

This is a simple Angular application that includes **Signup, Login, and To-Do List pages** with authentication, task management, and basic form validations. It uses **localStorage** to simulate backend storage.

---

## Features

### 1. Signup Page
- Fields: Full Name, Email, Password, Confirm Password
- Validations:
  - All fields are mandatory
  - Email must be valid
  - Password must be at least 6 characters
  - Confirm Password must match Password
- On successful signup → redirects to **Login page**

### 2. Login Page
- Fields: Email, Password
- Validations:
  - Both fields required
  - Email must be valid
- On successful login → redirects to **To-Do page**
- Invalid credentials → shows error message

### 3. To-Do Page
- Add a new task (title required, description optional, due date optional)
- Mark tasks as completed / toggle completion
- Delete tasks
- Search tasks by title/description
- Filter tasks: All / Completed / Pending
- Logout button → redirects to **Login page**

---

## Technologies Used
- Angular 20
- TypeScript
- Reactive Forms
- Angular Router
- Bootstrap (for styling)
- LocalStorage (for data persistence)
