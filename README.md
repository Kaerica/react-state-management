# React State Management: useContext and useReducer

## Overview

This project demonstrates how to manage state in a React application using the `useContext` and `useReducer` hooks.

The application includes a theme switcher and a task manager. It demonstrates how React can share state between components and manage more complex state updates.

## Learning Objectives

* Understand React's `useContext` hook.
* Understand React's `useReducer` hook.
* Share state between components using Context API.
* Manage task state using a reducer function.
* Apply light and dark themes.
* Organize a React application using reusable components.

## Technologies Used

* React
* TypeScript
* Vite
* CSS Modules
* React Hooks

## Features

### Theme Management

* Switch between light and dark themes.
* Share the current theme through React Context.
* Access theme state using a custom `useTheme` hook.

### Task Management

* Add tasks.
* Remove tasks.
* Manage task updates using `useReducer`.

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   ├── TaskManager.tsx
│   └── TaskManager.module.css
├── constants/
│   └── theme.ts
├── context/
│   └── ThemeContext.tsx
├── reducers/
│   └── taskReducer.ts
├── App.tsx
├── App.css
└── index.css
```

## Getting Started

### 1. Clone the repository

Replace the URL below with your actual GitHub repository URL.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd react-state-management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

## How It Works

### useContext

The Context API allows components to access shared values without passing props through every level of the component tree.

In this project, the theme context shares the current theme and the function used to change it.

### useReducer

The `useReducer` hook manages state using a reducer function.

The task reducer receives the current state and an action, then returns the updated state. Actions are used to add or remove tasks.

## Testing

To check that the project builds successfully, run:

```bash
npm run build
```

Also test the application in your browser by switching themes and adding and removing tasks.

## Author

**Erica Ishimwe**
