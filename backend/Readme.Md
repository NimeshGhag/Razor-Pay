# Backend API for Razorpay Integration

A Node.js backend application for managing products and integrating with Razorpay payment gateway.

## Features

- Product management (create and retrieve products)
- MongoDB database integration
- RESTful API endpoints
- Environment-based configuration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Environment**: dotenv for configuration

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/razorpay-backend
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

The server will start on the port specified in the `.env` file (default: 3000).

## API Endpoints

### Products

- **POST** `/api/products`
  - Create a new product
  - Request Body:
    ```json
    {
      "image": "product-image-url",
      "title": "Product Title",
      "description": "Product Description",
      "price": {
        "amount": 100,
        "currency": "INR"
      }
    }
    ```
  - Response: Product object with success message

- **GET** `/api/products/product`
  - Retrieve a product
  - Response: Product object with success message

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run tests (not implemented)

## Project Structure

```
backend/
├── src/
│   ├── app.js                 # Express app setup
│   ├── db/
│   │   └── db.js              # Database connection
│   ├── models/
│   │   └── product.models.js  # Product schema
│   ├── controllers/
│   │   └── products.controller.js # Product controllers
│   └── routes/
│       └── product.route.js   # Product routes
├── server.js                  # Server entry point
├── package.json
└── Readme.Md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
