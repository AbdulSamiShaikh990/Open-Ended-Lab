# Student Feedback Management System

A full-stack web application that allows students to submit feedback for various subjects and provides an admin interface to view and manage that feedback.

## Features

- Students can submit feedback with ratings and comments
- Admin dashboard to view all feedback
- Filter feedback by subject
- View average ratings per subject
- Pagination for feedback list
- Form validation using Formik and Yup
- Simple authentication system for admin access

## Tech Stack

- **Frontend**: React.js, React Router, Bootstrap, Formik, Yup
- **Backend**: Express.js, MongoDB, Mongoose
- **API Communication**: Axios

## Project Structure

```
student-feedback-system/
├── backend/                # Express.js server
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
│   └── server.js           # Server entry point
└── frontend/               # React.js client
    ├── public/             # Static files
    └── src/                # React source code
        ├── components/     # React components
        ├── services/       # API services
        ├── App.js          # Main component
        └── index.js        # Entry point
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd student-feedback-system/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/feedback-system
   ```
   Note: If you're using MongoDB Atlas, replace the MONGODB_URI with your connection string.

4. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```
   cd student-feedback-system/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```
   The application will open in your browser at http://localhost:3000

## Usage

### Student View
- Access the home page to submit feedback
- Fill in your name, select a subject, provide a rating, and optionally add comments
- Submit the form

### Admin View
- Click on "Admin Login" in the navigation bar
- Use the following credentials:
  - Username: admin
  - Password: admin123
- View all feedback submissions
- Filter feedback by subject
- See average ratings for each subject

## API Endpoints

- `POST /api/feedback` - Submit new feedback
- `GET /api/feedbacks` - Get all feedbacks
- `GET /api/feedbacks/:subject` - Get feedbacks by subject
- `GET /api/feedbacks/rating/:subject` - Get average rating by subject

## License

This project is licensed under the MIT License.
