<h1 align="center">
  Job Search Manager
</h1>

<p align="center">
  <img src="https://github.com/user-attachments/assets/0faa0a98-dd58-49ea-9451-ca585ba53fa5" alt="Job Search Manager Logo" width="150"/>
</p>

**Version**: 0.1.0

## Overview
Welcome to the **Job Search Manager**, an ongoing project designed to simplify the job search process. This app allows users to manage their job applications and explore job offers through integration with external APIs like Adzuna. In the future, we plan to add a robust backend and database support for enhanced data management.

## Features
- Add, edit, and delete job applications.
- Filter job applications by status.
- Search job offers using the Adzuna API with filters such as location and salary range.
- Export job application data as CSV.
- View estimated salary ranges for specific job titles.

## Future Enhancements
- **Backend Integration**: A fully-fledged backend is currently in development to manage user data securely.
- **Database Support**: Persistent data storage with integration to popular databases like PostgreSQL or MongoDB.

## Tech Stack
- **Frontend**: React, TypeScript
- **Styling**: Material UI, Emotion
- **APIs**: Adzuna API
- **Export**: CSV Export functionality using `json2csv`

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/job-search-app.git
   cd job-search-app
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the app:**

   ```bash
   npm start
   ```

This will start the app in development mode. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Keys

You will need an Adzuna API key. Get your key from the [Adzuna Developer Portal](https://developer.adzuna.com/).

Set your keys in the `.env` file:

```bash
REACT_APP_ADZUNA_APP_ID=your_app_id
REACT_APP_ADZUNA_API_KEY=your_api_key
```

## Usage
- Add your job applications to the dashboard.
- Filter and search job offers based on title, location, and salary range.
- Export your job applications data as CSV for future reference.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


