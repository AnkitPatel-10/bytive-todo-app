# Bytive - Todo-list Application
 Assignment by Bytive Technology Private Limited
 ## Backend Development Task
 Backend framework used : Node.js/[Express](https://expressjs.com/) \
 Database Used : [MongoDb](https://www.mongodb.com/atlas)( NoSQL ) \
 Bonus : 
 - Added JWT-based authentication for API enpoints.
 - Validate the data for backend using [Joi](https://www.npmjs.com/package/joi).
        
 ## Endpoints:
 Tasks Routes-
 1. GET ("/tasks) : Fetch all tasks of the user.
 2. POST ("/tasks) : Create a new task.
 3. GET ("/tasks/:id) : Show a specific task by fetching it using the id.
 4. PUT ("/tasks/"id) : Update a specific task by fetching it using the id.
 4. DELETE ("/tasks/"id) : Delete a specific task by fetching it using the id.

 User Routes-
 1. POST ("/tasks/auth/register") : Register user using email , username and password
 2. POST ("/tasks/auth/login") : Login user using email and password.
 3. POST ("/tasks/auth/logout") : Logout user using email.
    
## Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnkitPatel-10/bytive-todo-app.git
   cd bytive-todo-app
2. Clone the repository:
   ```bash
   npm install
3. Set Up Environment Variables:
   An .env.example file is provided for reference. Copy this file and create your own .env file:
   
   [.env.example](https://github.com/AnkitPatel-10/bytive-todo-app/blob/main/.env.example)

   Open the .env file and set the required environment variables. Example:
   ```
   MDB_URL=your-mongodb-url
   # Example:
   # mongodb+srv://${username}:${password}@${cluster}/<database_name>?retryWrites=true&w=majority&appName=<cluster_name> 
   PORT=5000
   JWT_SECRET=<add-your-jwt-secret>
4. Start the Application:
   To start the backend server:
   ```bash
   npm start
The server will run on http://localhost:5000 or the port specified in the .env file.

## Local Development Workflow
Start in Development Mode
To start the server with live reload (via nodemon):
  ```bash
  npm run dev
```
## Instructions
 This is only backend part of the project so use Postman for testing.
### Testing with Postman
Follow these steps to test your API:

1. Download and Install Postman
   Download [Postman](https://www.postman.com/downloads) from the official website.
   Install and open the application.
2. Set Up Your Local Server
   Start your backend server:
   ```bash
   npm start
   ```
   Confirm the server is running at http://localhost:5000 (or the port specified in your .env).
3. Create a Postman Collection
   Open Postman and create a new collection (e.g., To-Do List API).
   Inside the collection, create requests for each API endpoint.


