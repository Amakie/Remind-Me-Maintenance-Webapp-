# Remind Me Maintenance Webapp

## Overview
The **Remind Me Maintenance Webapp** is a portfolio project designed to help users keep track of their maintenance tasks. The application allows users to register, log in, and manage maintenance records for their equipment. The application is built using a modern stack including Node.js, Express, MongoDB, and React.

## Features
- **User Authentication**: Register, log in, and manage user sessions securely.
- **Maintenance Records Management**: Add, update, delete, and view maintenance records.
- **Responsive Design**: User-friendly interface designed for various devices.

## Installation

### Prerequisites
- Node.js (version 14.x or higher)
- React (check for a suitable version)
- Express
- MongoDB (locally installed or a MongoDB Atlas account)

### Setup Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/Amakie/Remind-Me-Maintenance-Webapp-.git
    cd remind-me-maintenance-webapp-
    ```

2. **Install dependencies**:
    ```bash
    npm install // on Ubuntu or any Linux system
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add your MongoDB connection string:
    ```env
    MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database-name>?retryWrites=true&w=majority
    JWT_SECRET=your_jwt_secret_key
    ```

4. **Start the server**:
    ```bash
    npm start // on Ubuntu or any Linux system
    ```

5. **Run the front-end**:
    Navigate to the front-end directory, create a `.env` file containing
    ```env
    port=3001
    ```
    and start the React app:
    ```bash
    cd client
    npm install
    npm start
    ```

## Usage
### API Endpoints
- **User Registration**: `POST /api/register`
- **User Login**: `POST /api/users/login`
- **Get All Records**: `GET /api/records`
- **Create a Record**: `POST /api/createReminder`
- **Update a Record**: `PUT /api/updateReminder/:id`
- **Delete a Record**: `DELETE /api/records/:id`

### Interaction
- **Registration**: Fill in your details on the registration form to create an account.
- **Login**: Use your registered email and password to log in.
- **Manage Records**: After logging in, you can add new maintenance records, update existing ones, or delete records.

## Technologies Used
- **Back-End**: Node.js, Express, MongoDB, Mongoose, JWT for authentication
- **Front-End**: React, TailwindCSS
- **Tools**: bcrypt for password hashing, dotenv for environment variables, cors for handling cross-origin requests

## Contributors
- **Member 1**: [Jonah Emmanuel] - Front-End Developer
- **Member 2**: [Constance Amatey] - Back-End Developer
- **Member 3**: [Esianyo Dzisenu] - Back-End Developer

## License
This project is licensed under the MIT License.

## Additional Information
### Known Issues
- N/A

### Future Improvements
- Implement user profile management
- Add notification features for upcoming maintenance tasks
