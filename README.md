# Post Explorer

## Description
This is a MERN stack project that allows users to explore random posts from various sources. Users can login, register, and browse posts which are generated using RESTful APIs.

## Technologies
- MongoDB: A document-based database that stores data in JSON-like format.
- Express: A web framework for Node.js that handles routing, middleware, and server-side logic.
- React: A front-end library for building user interfaces using components.
- Node.js: A runtime environment that executes JavaScript code outside the browser.

## Important npm packages
- JSON Web Tokens (jwt): Used for secure authentication and authorization.
- Bcrypt.js: Library used for hashing passwords for enhanced security.
- Zod validator: Used for validating Schema.
- react-toastify: Used to display message in prettier format.
- react-router-dom: To maintain proper url path and rendering proper components.
- flowbite: To import pre-build ui components like modal, pagination etc.

## Installation
To run this project locally, you need to have Node.js, npm, and MongoDB installed on your machine. Then follow these steps:

1. Clone this repository to your local machine.
2. Navigate to client folder and run `npm install` to install frontend dependencies.
3. Run `npm run dev` to start the client or the frontend.
4. Now navigate to the server folder and run `npm install` to install the dependencies of server or backend.
5. Create a `.env` file in the server folder and add the following variables:
    - `PORT`: The port number for the server (default is 8000).
    - `MONGODB_URI`: The connection string for MongoDB (I have used local database).
    - `ACCESS_TOKEN_SECRET`: The secret key for generating JSON web tokens for authentication.
    - `ACCESS_TOKEN_EXPIRY`:The life span of jwt (for example, 1d)
    - `CORS_ORIGIN`:The url of the frontend so that it can accept the request from selective origin (Example: http://127.0.0.1:5173)
6. To view post, add some data to your database so that it can be fetched using API.
   - Create a collection inside your database and named it as `posts`.
   - Now import data to the database from [JSON file](https://drive.google.com/file/d/1Tg3-uWBm9mlNQct-woslnSLv3PXK-FQz/view?usp=sharing).
7. Run `node server.js` to start the development server.
8. Open your browser and and run the frontend url in the browser to view the application.

## Usage
To use this application, you need to create an account or login with an existing one. Then you can explore random posts. 


 
