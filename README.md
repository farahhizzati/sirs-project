# SIRS - Student Issues Reporting System

## Project Description

SIRS (Student Issues Reporting System) is a web-based application developed for IMS566 coursework. The system provides a centralized platform for administrators to manage and monitor campus-related issue reports submitted by students, including facility problems, IT concerns, and safety matters.

## Features Included

### 1. Authentication System
- Admin login page with form validation
- Error feedback for invalid credentials
- Session simulation

### 2. Dashboard
- Overview statistics (Total Issues, Monthly Reports, Resolved, Pending)
- Weekly issue statistics chart (Bar Chart)
- Recent reports quick view

### 3. All Reports Page
- List of reported issues organized by time (Today, This Week)
- Status badges (Pending, In Progress, Resolved)
- Priority indicators (High, Medium, Low)
- Monthly reports trend chart (Line Chart)
- Status distribution chart (Doughnut Chart)

### 4. Student Profiles
- Table view of all registered students
- Student information (ID, Name, Faculty, Email, Reports Count)
- Clickable rows to view detailed profiles

### 5. Student Profile Detail
- Individual student information
- Contact details
- Recent issue reports submitted

### 6. Additional Features
- Dark/Light theme toggle
- Fully responsive design (mobile & desktop)
- Consistent navigation across all pages

## Instructions to Test Login

1. Open `index.html` in Google Chrome
2. Enter the following credentials:
   - Admin ID: `admin001`
   - Password: `admin123`
3. Click "SIGN IN" button

Testing Invalid Login:
- Enter wrong credentials to see error message: "Invalid username or password"

## Frameworks and Libraries Used

### Front-End Framework
- Bootstrap 5.3.0 - Responsive design and UI components
- CDN: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`

### Data Visualization
- Chart.js - Interactive charts (Bar, Line, Doughnut)
- CDN: `https://cdn.jsdelivr.net/npm/chart.js`

### Core Technologies
- HTML5
- CSS3
- JavaScript
- localStorage

## Project Structure

```
SIRS/
├── index.html          # Login page
├── dashboard.html      # Main dashboard
├── reports.html        # All reports with charts
├── students.html       # Student list
├── profile.html        # Student profile detail
├── css/
│   └── style.css       # Custom styles
├── js/
│   ├── theme.js        # Dark/light mode
│   ├── login.js        # Authentication
│   ├── dashboard.js    # Dashboard charts
│   ├── stats.js        # Statistics charts
│   ├── report.js       # Form handler
│   ├── students.js     # Student interactions
│   └── profile.js      # Profile data
└── assets/
    ├── logo.png
    ├── logo2.png
    ├── bgimage.jpg
    └── favicon.ico
```

## Deployment

GitHub Repository: `https://github.com/farahhizzati/sirs-project`  
Live Website: `https://farahhizzati.github.io/sirs-project/`

## Browser Compatibility

Optimized for Google Chrome as per assignment requirements.

## Academic Information

Course: IMS566 - Advanced Web Design Development and Content Management  
Institution: Universiti Teknologi MARA (UiTM) Puncak Perdana Campus
Class (GROUP): CDIM2624C

Developed By:
- Nur Farah Izzati Binti Ahmad Shuhaimi (2025117283)
- Raqib Mu'izzuddin Bin Mohd Asraf (2025196747)

---

© 2025 Student Issues Reporting System - IMS566 Individual Assignment