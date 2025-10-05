<<<<<<< HEAD
# TodoAuthApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
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
>>>>>>> b3756ade37fec11298a2d42c5440998836b4d7eb
