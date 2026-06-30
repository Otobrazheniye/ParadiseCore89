# Paradise Core 89

## Codebase Overview

The project is organized into backend and frontend modules.

- Backend: 6 core files
- Frontend API layer: 9 files
- Frontend components: 17 files
- Frontend SCSS modules: 16 files
- Frontend entry files: 2 files

Total listed core files: 50

# AI Business
## Short Description
AI Business Paradise Core 89 is a web platform for presenting AI business services, training programs, package plans, reviews, contact requests, and user access features.


The project includes a custom frontend interface and a Django-based backend with admin-managed content and API endpoints.


## Current Status
The project is currently in active development.


Public deployment is not available yet.  
The application can be launched locally in a development environment.


## Features 
#### Frontend
- Vite-based frontend structure
- Multi-page SPA navigation
- Main Paradise Core pages: Home, Research, Divisions
- AI Business section with separate pages
- AI Business services catalog
- Service detail sections with structured descriptions
- Contact request page and contact forms
- Reviews section with review form
- Training programs page
- Package plans and package order request form
- User registration, login, logout and account area
- User access page for packages, services and trainings
- Header, burger menu and dynamic footer gateway
- Responsive SCSS layout
- Modular SCSS architecture by page/section
- API layer separated into dedicated frontend files
  

#### Backend
- Django backend application
- Django REST Framework API
- Services API with list and detail endpoints
- About AI Business content API
- Contact request creation
- Reviews and training reviews management
- Training programs API
- Package plans API
- Package order request system
- User registration, login, logout and JWT authentication
- User access system for packages, services and trainings
- PostgreSQL-ready Django project structure


#### Admin Panel
The project includes a Django admin panel that allows the administrator to manage the main AI Business system without editing the frontend code.

- Manage About AI Business content
- Manage services, descriptions, icons and display order
- Manage contact requests from users and companies
- Manage reviews and training-related reviews
- Manage training programs
- Manage package plans
- Review and moderate package order requests
- Approve package orders manually
- Manage users
- Control user access to packages, services and training programs


## Tech Stack

### Frontend
- HTML
- SCSS
- JavaScript
- Vite

### Backend
- Python
- Django
- Django REST Framework
- Django CORS Headers
- Simple JWT authentication
- Custom Django user model
- Django Admin

### Database
- PostgreSQL for development
- PostgreSQL planned for production
- 
### Authentication
- JWT access and refresh tokens
- User registration
- User login and logout
- Protected user account endpoints
- 
### Tools
- Git
- GitHub
- Django Admin
- VS Code


## Project Structure

## Project Architecture

```txt
PC89
│
├── backend/                         # Django + DRF backend
│   │
│   ├── aibusiness/                  # Core AI Business application
│   │   ├── admin.py                 # Admin panel configuration
│   │   ├── apps.py                  # Django app configuration
│   │   ├── models.py                # Database models and business entities
│   │   ├── serializers.py           # API data serializers
│   │   ├── urls.py                  # Application API routes
│   │   └── views.py                 # API views and request logic
│   │
│   ├── config/                      # Project settings and root configuration
│   └── manage.py                    # Django project management entry point
│
└── frontend/                        # Vite + JavaScript frontend
    │
    └── src/
        │
        ├── api/                     # API communication layer
        │   ├── client.js            # Axios client configuration
        │   ├── AuthApi.js           # Auth, registration, login and logout
        │   ├── servicesApi.js       # Services API requests
        │   ├── trainingApi.js       # Training programs API requests
        │   ├── reviewApi.js         # Reviews API requests
        │   ├── contactRequestApi.js # Contact request API requests
        │   ├── orderApi.js          # Package order requests
        │   ├── accessApi.js         # User access API requests
        │   └── aboutaibusiness.js   # About AI Business API requests
        │
        ├── components/              # Page rendering and UI logic
        │   ├── aibusiness-basepage.js
        │   ├── aibusiness-about.js
        │   ├── aibusiness-services.js
        │   ├── aibusiness-contact.js
        │   ├── aibusiness-review.js
        │   ├── aibusiness-training.js
        │   ├── aibusiness-package-prepare.js
        │   ├── aibusiness-hydrate.js
        │   ├── basepage.js
        │   ├── basepage-dev.js
        │   ├── burgermenu.js
        │   ├── header.js
        │   ├── footer.js
        │   ├── footer-dev.js
        │   ├── page-division.js
        │   ├── page-research.js
        │   └── user.js
        │
        ├── scss/                    # Modular SCSS design system
        │   ├── _variables.scss      # Shared variables
        │   ├── _header.scss         # Header and navigation
        │   ├── _footer.scss         # Footer and gateway styles
        │   ├── _basepage.scss       # Main landing page
        │   ├── _basepageaibusiness.scss
        │   ├── _aboutaibusiness.scss
        │   ├── _servicesaibusiness.scss
        │   ├── _contactaibusiness.scss
        │   ├── _reviewaibusiness.scss
        │   ├── _trainingaibusiness.scss
        │   ├── _preparepackageaibusiness.scss
        │   ├── _useraccess.scss
        │   ├── _userprofile.scss
        │   ├── _division.scss
        │   └── _research.scss
        │
        ├── main.js                  # SPA navigation and frontend initialization
        └── main.scss                # Main SCSS entry point
```


       
11. Добавь Frontend Overview
## Frontend Overview

The frontend is built with Vite, JavaScript and SCSS.  
It works as a modular single-page application where page rendering, navigation, authentication UI, API data loading and section-specific behavior are separated into dedicated modules.

The main frontend entry point is `main.js`.  
It initializes the application layout, renders the header, main page container and footer switcher, and controls navigation between the main Paradise Core pages and the AI Business section.

### Core frontend responsibilities

- Render the main application layout
- Switch between main pages: Home, Research, Divisions, Archives and AI Business
- Switch between AI Business pages: About, Services, Reviews, Training, Contact and User Access
- Initialize header navigation and AI Business navigation
- Initialize burger menu behavior
- Initialize authentication modal, login, registration, logout and current user check
- Load dynamic data from backend APIs
- Hydrate services, package plans, package order pages and user access data
- Handle package order preparation and package order form logic
- Handle contact request forms
- Handle reviews and review form submission
- Render service detail sections based on selected service slug
- Initialize dynamic footer switching
- Initialize language switch buttons

### Frontend architecture

The frontend is divided into several logical layers:

| Layer | Purpose |
|---|---|
| `main.js` | Main SPA entry point, page switching and initialization logic |
| `components/` | Page templates, UI rendering, forms and interaction logic |
| `api/` | Frontend communication with Django REST API |
| `scss/` | Modular SCSS styles for pages, layouts and UI sections |

### Main frontend areas

- Paradise Core base page
- Research page
- Divisions page
- AI Business landing page
- AI Business about page
- Services catalog
- Service detail sections
- Contact request page
- Reviews section
- Training programs page
- Package plans
- Package order preparation page
- User registration and login interface
- User account and access interface
- Header, burger menu and dynamic footer gateway