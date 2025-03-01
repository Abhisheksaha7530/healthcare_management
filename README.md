# healthcare_management

## Overview
The **Healthcare Management System** is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides a seamless platform for managing healthcare-related services, including user authentication, appointment scheduling, and secure patient records.

## Features
- **User Authentication**: Secure login and registration using JWT authentication.
- **Role-Based Access Control**: Different user roles (admin, doctor, patient) with specific access permissions.
- **Appointment Scheduling**: Patients can book appointments with doctors based on availability.
- **Medical Records Management**: Secure storage and retrieval of patient records.
- **SEO Optimization**: Improved visibility for search engines.
- **Responsive Design**: Fully functional across devices.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB (local or cloud-based)

### Steps to Run Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Abhisheksaha7530/healthcare_management.git
   cd healthcare_management
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   cd client && npm install
   ```

3. **Setup Environment Variables**:
   - Create a `.env` file in the root directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```

4. **Run the Backend Server**:
   ```bash
   npm start
   ```

5. **Run the Frontend**:
   ```bash
   cd client
   npm start
   ```

6. **Access the Application**:
   Open your browser and go to `http://localhost:3000`

## Contributing
Feel free to submit issues or pull requests for improvements.

---
**GitHub Repository**: [Healthcare Management System](https://github.com/Abhisheksaha7530/healthcare_management)
