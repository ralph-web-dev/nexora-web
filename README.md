# Nexora IT Solutions

A modern corporate website with dynamic animations, contact forms, and a serverless email delivery backend.

## Project Structure

```text
(Root)
├── api/                # Vercel Serverless Functions
│   ├── inquiry.js      # Contact form email handler
│   └── subscribe.js    # Newsletter subscription handler
├── public/             # Static assets (images, favicon, etc.)
├── src/                # React frontend source files
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── package.json        # Frontend dependencies and scripts
└── vercel.json         # Vercel Configuration
```

## Features

- Responsive corporate frontend.
- Contact form and newsletter integration.
- Email sending via Gmail and Nodemailer.
- Scroll animations and dynamic routing.
- Fully contained serverless backend functions.

## Tech Stack

- **React** 
- **Vite**
- **JavaScript**
- **Tailwind CSS** (for styling and layout)
- **CSS3** (custom styles in `index.css`)

## Prerequisites

- Node.js 18+ installed.
- A Gmail account with an App Password for SMTP.

## Backend Setup (Serverless Local Dev)

1. Open a terminal in the root directory of the project.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com
```

## Frontend Setup

1. Open a terminal in the root directory.
2. Start the local development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` by default. *(Note: To test the serverless API locally, use the Vercel CLI by running `vercel dev` instead).*

## API Endpoints

**POST** `/api/inquiry`
- Accepts JSON: `{ name, email, service, subject, message }`
- Sends a styled HTML inquiry email to the specified `TO_EMAIL`.

**POST** `/api/subscribe`
- Accepts JSON: `{ email }`
- Sends a styled HTML newsletter subscription email.

## Notes

- The backend uses Gmail SMTP via Nodemailer.
- Make sure `SMTP_PASS` is a valid Gmail App Password, not your regular account password.
- Because this project uses Vercel Serverless Functions, the API endpoints are automatically hosted directly from the `api/` directory.

## Recommended Deployment

- **Full Stack (Frontend + Serverless Functions):** Vercel. 
- Simply link your repository to Vercel, set the Framework Preset to **Vite**.
- Leave the Root Directory setting **Empty** (so it points to the root of the repo).
- Add all SMTP variables in your Vercel Project Environment Variables settings.

## Contact

If you want to update this website or add new sections, edit files in `src/components/` for UI changes and `api/` for backend logic.

## License

This project is intended for portfolio and business presentation purposes.
