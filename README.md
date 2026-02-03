# Ecommerce Website

A full-stack ecommerce platform built with Django backend and React frontend. 
## Features

- User registration and login
- Product catalog and browsing
- Secure authentication using JWT tokens
- Responsive frontend design with Tailwind CSS
- RESTful API backend with Django REST Framework

## Tech Stack

### Backend
- Django 6.0.1
- Django REST Framework
- PostgreSQL database
- JWT authentication
- CORS support

### Frontend
- React 19.2.0
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation

## Installation

### Prerequisites
- Python 3.8+
- Node.js 16+
- PostgreSQL

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up the database:
   - Ensure PostgreSQL is running
   - Update database settings in `ecommerce_backend/settings.py` if needed
   - Run migrations:
     ```
     python manage.py makemigrations
     python manage.py migrate
     ```

5. Create a superuser:
   ```
   python manage.py createsuperuser
   ```

6. Run the server:
   ```
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

## Usage

- Access the backend API at `http://localhost:8000`
- Access the frontend at `http://localhost:5173` (default Vite port)
- Admin panel available at `http://localhost:8000/admin`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

