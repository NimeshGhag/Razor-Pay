# Razor-Pay

Simple demo project integrating Razorpay for payments.

## Project Overview

- Full-stack example with a Node.js/Express backend and a Vite + React frontend.
- Backend serves API routes for products and payments and integrates with Razorpay.
- Frontend provides a product list and a payment button to initiate transactions.

## Repo Layout

- `backend/` — Express server, routes, controllers, and models
- `frontend/` — Vite + React app with payment UI components

## Setup

1. Install dependencies for backend and frontend:
   - Backend:

     npm install --prefix backend

   - Frontend:

     npm install --prefix frontend

2. Start the backend (from repo root):

   npm run start --prefix backend

3. Start the frontend (from repo root):

   npm run dev --prefix frontend

4. Open the frontend URL shown by Vite (usually http://localhost:3000 or http://localhost:5173).

## Environment

- Add any required environment variables to the backend (Razorpay keys, DB URL) as described in `backend/Readme.Md`.

## Contributing

Feel free to open issues or submit pull requests with improvements.

## License

MIT
