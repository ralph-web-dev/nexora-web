# Nexora IT Solutions

A modern full-stack corporate website built with React, Vite, and Vercel Serverless Functions. The project features dynamic UI animations, responsive layouts, integrated contact and newsletter forms, and automated email delivery powered by Nodemailer and Gmail SMTP.

---

## Project Structure

```bash
client/
├── src/                # React frontend source files
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
│
├── public/             # Static assets (images, favicon, etc.)
│
├── api/                # Vercel Serverless Functions
│   ├── inquiry.js      # Contact form email handler
│   └── subscribe.js    # Newsletter subscription handler
│
├── package.json        # Frontend dependencies and scripts
│
server/                 # Legacy/local Express API environment
```

---

## Features

* Modern and responsive corporate UI
* Smooth animations and interactive user experience
* Contact form integration with email delivery
* Newsletter subscription system
* Dynamic client-side routing
* Serverless backend architecture using Vercel Functions
* Gmail SMTP integration with Nodemailer

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS3

### Backend

* Vercel Serverless Functions
* Node.js
* Nodemailer

### Deployment

* Vercel

---

## Prerequisites

Before running the project locally, ensure you have:

* Node.js 18 or higher installed
* A Gmail account with an App Password enabled for SMTP access

---

# Environment Variables

Create a `.env` file inside the `client/` directory and add the following:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com
```

---

## Installation & Setup

### 1. Install Dependencies

Navigate to the client directory:

```bash
cd client
npm install
```

---

### 2. Start Development Server

Run the local development server:

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

---

## API Endpoints

### POST `/api/inquiry`

Handles customer inquiries from the contact form.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "service": "Web Development",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project."
}
```

#### Functionality

* Sends a styled HTML email using Nodemailer
* Delivers messages directly to the configured business email

---

### POST `/api/subscribe`

Handles newsletter subscriptions.

#### Request Body

```json
{
  "email": "subscriber@example.com"
}
```

#### Functionality

* Sends a styled HTML subscription notification email

---

## Notes

* The project uses Gmail SMTP through Nodemailer for email delivery.
* `SMTP_PASS` must be a valid Gmail App Password.
* Do not use your regular Gmail account password.
* Serverless API routes are deployed directly from the `client/api/` directory when hosted on Vercel.

---

## Deployment

### Recommended Platform: Vercel

1. Connect your GitHub repository to Vercel
2. Set the framework preset to **Vite**
3. Set the root directory to:

```bash
client/
```

4. Add all required environment variables in the Vercel dashboard

---

## Development Notes

### Frontend Updates

Edit files inside:

```bash
client/src/components/
```

### Backend Logic

Edit serverless functions inside:

```bash
client/api/
```

---

## License

This project is intended for portfolio and business presentation purposes.

---

## Author

Developed by Ralph.Dev
