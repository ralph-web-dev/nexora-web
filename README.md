Nexora IT Solutions 
A modern, high-performance corporate website built for Nexora IT Solutions, a cutting-edge IT and digital transformation company. The platform is designed to showcase enterprise-grade services, pricing, and features with a stunning, fully responsive UI/UX.

Features
Modern UI/UX: Built with a beautiful, custom design system utilizing Tailwind CSS.
Smooth Animations: Integrated with framer-motion and custom ScrollReveal components for dynamic, engaging scroll animations.
Serverless API Integration: Built-in serverless functions for handling Contact and Newsletter sign-up forms securely without a dedicated backend server.
Email Notifications: Automatic, beautifully styled HTML email notifications powered by nodemailer when users submit forms or subscribe.
Fully Responsive: Pixel-perfect layouts optimized for Mobile, Tablet, Laptop, and Ultra-wide Desktop displays.
Dynamic Search: Collapsible global search functionality with smart keyword routing.
🛠️ Tech Stack
Frontend Framework: React (Vite)
Styling: Tailwind CSS (with custom design tokens and extended theme configurations)
Animations: Framer Motion
Routing: React Router DOM
Backend / API: Node.js (Vercel Serverless Functions)
Email Service: Nodemailer (via SMTP)
Deployment: Vercel
Project Structure
text
├── client/
│   ├── api/                 # Vercel Serverless Functions (subscribe.js, inquiry.js)
│   ├── public/              # Static assets (Favicon, etc.)
│   ├── src/                 
│   │   ├── assets/          # Images, Icons, SVGs
│   │   ├── components/      # Reusable React components (Sections & UI)
│   │   ├── pages/           # Main route pages (Home, About, Services, etc.)
│   │   ├── App.jsx          # Main App routing
│   │   ├── index.css        # Global Tailwind CSS and custom utilities
│   │   └── main.jsx         # React entry point
│   ├── tailwind.config.js   # Tailwind design system configuration
│   ├── vercel.json          # Vercel deployment configuration
│   └── package.json         # Frontend dependencies
└── server/                  # (Optional/Legacy) Standalone Express server environment
Local Development Setup
Clone the repository

bash
git clone https://github.com/ralph-web-dev/nexora-web.git
cd nexora-web/client
Install Dependencies

bash
npm install
Set up Environment Variables Create a .env file in the root of the client/ directory (for Vercel local dev) and add your SMTP credentials:

env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com
Run the Development Server

bash
npm run dev
The site will be available at http://localhost:5173.

☁️ Deployment (Vercel)
This project is highly optimized for deployment on Vercel utilizing their Serverless Functions architecture.

Push your code to your GitHub repository.
Import the project into your Vercel Dashboard.
Set the Framework Preset to Vite.
Ensure the Root Directory is set to client (if your git root contains both client and server folders).
Add the Environment Variables listed above into your Vercel Project Settings.
Click Deploy.
Note: The project uses a vercel.json file to route frontend paths to index.html and properly configure the /api directory for backend execution.

Design & Assets
All SVG icons have been customized using CSS filters (icon-blue-filter, icon-white-filter) to maintain a lightweight bundle size without needing duplicate colored image files. The primary brand color is a vibrant Cyan/Blue (#06a3da) contrasted against a deep Navy (#091e3e).

License
© 2025 Nexora IT Solutions. All Rights Reserved.
