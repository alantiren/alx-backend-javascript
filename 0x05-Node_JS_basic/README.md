# Node.js Backend Project

This is a Node.js backend project that demonstrates the use of Express and various modules for creating a small HTTP server. The project is organized into controllers, routes, and utilities for better structure and maintainability.

## Project Structure

- `controllers`: Contains classes for handling different routes.
- `routes`: Defines the application routes and maps them to appropriate controllers.
- `utils.js`: Utility functions, such as reading data from a CSV database asynchronously.

## Controllers

### AppController

- `getHomepage`: Displays a simple greeting message.

### StudentsController

- `getAllStudents`: Lists all students, organized by field, with the number of students in each field and their first names.
- `getAllStudentsByMajor`: Lists students in a specific major (CS or SWE) with their first names.

## Routes

The routes are mapped using Express in the `mapRoutes` function.

- `/`: Displays a greeting message.
- `/students`: Lists all students.
- `/students/:major`: Lists students in a specific major.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Run the server: `npm run dev`

The server will be accessible at [http://localhost:1245](http://localhost:1245).

## Usage Examples

### Greeting

```bash
curl localhost:1245
# Output: Hello Holberton School!
```

### List of Students

```bash
curl localhost:1245/students
# Output: This is the list of our students...
```

### Students by Major

```bash
curl localhost:1245/students/CS
# Output: List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
```

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and suggestions are highly appreciated!

