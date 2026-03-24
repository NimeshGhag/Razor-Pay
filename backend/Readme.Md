# Backend — Razorpay Integration

This folder contains the Node.js / Express backend for the Razorpay demo project. It provides simple product management and payment order creation/verification using Razorpay.

## Key features

- Create and fetch products (MongoDB)
- Create Razorpay orders and verify payments
- JSON REST API with CORS enabled

## Tech stack

- Node.js + Express
- MongoDB with Mongoose
- Razorpay official SDK
- dotenv for configuration

## Quick start

1. Open the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in `backend/` with the required variables (example below).

4. Start the dev server:

   ```bash
   npm run dev
   ```

## Environment variables

Add these to your `.env` file in `backend/`:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/razorpay-backend
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

## NPM scripts

- `npm run dev` — start server with `nodemon` (development)
- `npm start` — start server with `node` (production)

## API Reference

Base URL: `http://localhost:<PORT>/api`

Products

- POST `/api/products` — Create a new product
  - Example request body:

    ```json
    {
      "image": "https://...",
      "title": "Product Title",
      "description": "Product Description",
      "price": { "amount": 10000, "currency": "INR" }
    }
    ```

- GET `/api/products/product` — Fetch products (returns array)

Payments

- POST `/api/payments/create-order` — Create a Razorpay order
  - Creates an order using the first product's price (see `src/controllers/payment.controller.js`).
  - Response: JSON containing the `order` object returned by Razorpay.

- POST `/api/payments/verify` — Verify a payment
  - Request body expected:

    ```json
    {
      "razorpayOrderId": "order_id",
      "razorpayPaymentId": "payment_id",
      "signature": "signature"
    }
    ```

  - On successful verification the payment record status is updated to `COMPLETED` and the endpoint responds with `{ "status": "success" }`.

## Implementation notes

- Routes are mounted in `src/app.js`:
  - Products: `/api/products` (see [src/app.js](src/app.js#L8-L12))
  - Payments: `/api/payments` (see [src/app.js](src/app.js#L8-L12))
- Razorpay keys are read from `process.env.RAZORPAY_KEY_ID` and `process.env.RAZORPAY_KEY_SECRET`.
- Payment verification uses Razorpay's `validatePaymentVerification` utility and stores payment records in the `payment` collection.

## Project structure

```
backend/
├─ src/
│  ├─ app.js                # Express app and routes
│  ├─ db/db.js              # MongoDB connection
│  ├─ controllers/
│  │  ├─ products.controller.js
│  │  └─ payment.controller.js
│  ├─ models/
│  │  ├─ product.models.js
│  │  └─ payment.model.js
│  └─ routes/
│     ├─ product.route.js
│     └─ payment.routes.js
├─ server.js
├─ package.json
└─ Readme.Md
```

## Contributing

1. Fork the repo
2. Create a feature branch
3. Commit and push
4. Open a pull request

If you want, I can also add example `.env.example` and a short curl/postman collection for quick testing.
