Nexora IT Solutions
A modern corporate website with dynamic animations, contact forms, and a serverless email delivery backend.

Project Structure
client/src/ — React frontend including components, pages, styling (index.css), and client-side JavaScript.
client/public/ — static site assets including Favicon and images.
client/api/ — Vercel serverless-style handlers (inquiry.js, subscribe.js) for deployments that support function routes.
client/package.json — frontend dependencies and build scripts.
server/ — (Legacy/Local) Express API service environment.

Features
Responsive corporate frontend.
Contact form and newsletter integration.
Email sending via Gmail and Nodemailer.
Scroll animations and dynamic routing.
Fully contained serverless backend functions.

Prerequisites
Node.js 18+ installed.
A Gmail account with an App Password for SMTP.

Backend Setup (Serverless Local Dev)
Open a terminal in client/.
Install dependencies:
npm install
Create a .env file in client/ with the following values:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com

Frontend Setup
Open a terminal in client/.
Start the local development server:
npm run dev
The frontend will run on http://localhost:5173 by default.

API Endpoints
POST /api/inquiry
Accepts JSON: { name, email, service, subject, message }
Sends a styled HTML inquiry email to the specified TO_EMAIL.

POST /api/subscribe
Accepts JSON: { email }
Sends a styled HTML newsletter subscription email.

Notes
The backend uses Gmail SMTP via Nodemailer.
Make sure SMTP_PASS is a valid Gmail App Password, not your regular account password.
Because this project uses Vercel Serverless Functions, the API endpoints are hosted directly from the client/api/ directory.

Recommended Deployment
Full Stack (Frontend + Serverless Functions): Vercel. 
Simply link your repository to Vercel, set the Framework Preset to Vite, and set the Root Directory to client/.
Add all SMTP variables in your Vercel Project Environment Variables settings.

Contact
If you want to update this website or add new sections, edit files in client/src/components/ for UI changes and client/api/ for backend logic.
