# Server API

This is a simple plain JavaScript Express API for handling email inquiries.

## Setup

1. Install dependencies:

   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file based on `.env.example`.

3. Start the server:

   ```bash
   npm start
   ```

## Endpoint

- `POST /api/inquiry`

Request body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "subject": "Optional subject",
  "message": "Your inquiry message"
}
```

The server sends the inquiry email using the configured SMTP settings.
