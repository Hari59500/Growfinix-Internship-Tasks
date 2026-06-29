# Growfinix Internship - Task 1: Secure Authentication System

This project is part of the Growfinix 1-Month Fullstack Development Internship Task.

## Task Overview

Build a complete login and registration flow with a modern, responsive frontend and a secure backend that hashes passwords and issues JWTs for authentication.

## Tech Stack

- Frontend: React, Tailwind CSS, Vite
- Backend: Node.js, Express
- Database: MongoDB (Atlas)
- Authentication: JWT (JSON Web Tokens), bcrypt for password hashing

## Features

- User registration with name, email, and password
- Passwords are securely hashed using bcrypt before being stored
- User login with credential verification
- JWT token issued on successful login/registration
- Form validation on the frontend (empty field checks)
- Clean, responsive UI built with Tailwind CSS

## Project Structure

growfinix-task1/
- backend/
  - controllers/authController.js (Register and login logic)
  - models/User.js (MongoDB user schema)
  - routes/authRoutes.js (API routes)
  - server.js (Entry point)
  - .env (Environment variables, not committed)
- frontend/
  - src/components/Login.jsx
  - src/components/Register.jsx
  - src/App.jsx
- README.md

## How to Run Locally

### Backend

cd backend
npm install
node server.js

Create a .env file inside backend with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

### Frontend

cd frontend
npm install
npm run dev

The frontend runs on http://localhost:5173 and the backend on http://localhost:5000

## API Endpoints

POST /api/auth/register - Register a new user
POST /api/auth/login - Login existing user

## Author

Hari Krishnan - Growfinix Fullstack Development Interns