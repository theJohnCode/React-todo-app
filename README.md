# Todo List Application (React Frontend)

This is the React frontend for a full-stack web application that allows users to manage their to-do list. The backend is built with Laravel, providing a RESTful API for the frontend to interact with.

## Features

- Add new todo items
- View list of todo items
- Update todo items (mark as completed, edit title)
- Delete todo items
- Real-time updates to the todo list

## Backend Repository

The Laravel backend for this project is hosted on GitHub. You can find the repository with all the backend code at the following link:

[Todo List Laravel Backend Repository](https://github.com/theJohnCode/todo-app-api)


## Getting Started

To get the React frontend up and running, please follow these steps:

1. Clone the repository to your local machine.
   ```sh
   git clone https://github.com/theJohnCode/React-todo-app.git
   ```

2. Navigate to the project directory.
   ```sh
   cd React-todo-app
   ```

3. Install the Node.js dependencies.
   ```sh
   npm install
   ```
   or

   ```sh
   yarn
   ```

4. Start the development server.
   ```sh
   npm start
   ```

5. The frontend application will now be accessible at `http://localhost:3000`.

## Usage

- To add a new todo, type in the input field and press the "Add" button.
- To mark a todo as completed, click on the checkbox next to the todo item.
- To edit a todo, click on the "Edit" button next to the todo item, update the title, and press "Update".
- To delete a todo, click on the "Delete" button next to the todo item.

## API Endpoints (For Reference)

The following are the API endpoints provided by the backend:

- **List all todos:**
  ```
  GET /api/todos
  ```

- **Get a single todo:**
  ```
  GET /api/todos/{id}
  ```

- **Add a new todo:**
  ```
  POST /api/todos
  ```

- **Update a todo:**
  ```
  PUT /api/todos/{id}
  ```

- **Delete a todo:**
  ```
  DELETE /api/todos/{id}
  ```
- **Mark a todo as completed:**
  ```
  PUT /api/todos/{id}
  ```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with meaningful commit messages.
4. Push your branch to your forked repository.
5. Open a pull request against the main branch of this repository.
