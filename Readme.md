# Blogger.com

Blogger.com is a full-stack blog application built with the MERN (MongoDB, Express.js, React, Node.js) stack. Users can register, login, create, edit, and delete their blogs, as well as upload images to accompany their posts. The application features multi-page functionality using React Router DOM, user authentication with JWT and cookies, and responsive design.

Check out the deployed application: [Watch Live](https://blogger-frontend-tm4i.onrender.com/)

## Features

- **User Authentication:** Users can register and log in securely using JWT and cookies.
- **Blog Management:** Create, read, update, and delete blog posts.
- **Image Upload:** Users can upload images to accompany their blog posts using Multer.
- **Timestamps:** Each blog post displays creation and update timestamps along with the author's information.
- **Responsive Design:** The application is designed to work seamlessly on various devices.

## Folder Structure

- **client:** Contains the frontend code built with React, Vite, and CSS.
- **server:** Houses the backend server code with Node.js, Express.js,

## Technologies Used

- **Frontend:**
  - Vite
  - React
  - React Router DOM
  - React Hot Toast (for alert type messages)
  - CSS (for styling)
  - Bootstrap icons

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (MongoDB Atlas for cloud storage)
  - Mongoose (for database operations)
  - Multer (for handling file uploads)
  - jwt (for user authentication)
  - fs (file operations)
  - bcrypt (for hasing passwords)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/praveen-rikhari/MERN_Blog_App.git

2.Install dependencies for both client and server:

  cd client/
  npm install

  cd server/
  npm install

3.Set up your environment variables:

    Create a .env file in the server directory and add the necessary environment variables.
    
    MONGO_URL=your_mongodb_uri
    SECRET=your_jwt_secret

4. Run the application:

  Start the frontend:
    cd ../client
    npm start

  Start the backend:
    cd ../server
    npm start

## Contributing
  Feel free to contribute to the project. 
