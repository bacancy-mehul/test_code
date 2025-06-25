# Node.js + React + Material UI Setup

A basic setup with Node.js Express server and React frontend with Material UI.

## Project Structure

```
├── client/                 # React frontend
│   ├── public/
│   └── src/
├── server/                 # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Data models
│   ├── routes/           # Route definitions
└── package.json          # Root package.json
```

## Setup

1. Install all dependencies:

```bash
npm run install-all
```

## Running the Application

To run both client and server simultaneously:

```bash
npm run dev
```

This will start:

- Server on http://localhost:5000
- Client on http://localhost:3000

## Individual Commands

- Run only the server: `npm run server`
- Run only the client: `npm run client`
- Build the client: `npm run build`


## 📖 API Endpoints

### 1. GET `/products`

Returns a list of all products.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 89.99,
      "description": "High-quality wireless headphones with noise cancellation",
      "stock": 50,
      "image": "https://example.com/headphones.jpg"
    }
  ],
  "count": 8
}
```

### 2. GET `/products/:id`

Returns a single product by ID.

**Example:** `GET /products/1`

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "category": "Electronics",
    "price": 89.99,
    "description": "High-quality wireless headphones with noise cancellation",
    "stock": 50,
    "image": "https://example.com/headphones.jpg"
  }
}
```

### 3. GET `/products?category=Apparel`

Filters products by category.

**Example:** `GET /products?category=Apparel`

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 2,
      "name": "Cotton T-Shirt",
      "category": "Apparel",
      "price": 24.99,
      "description": "Comfortable cotton t-shirt in various colors",
      "stock": 100,
      "image": "https://example.com/tshirt.jpg"
    }
  ],
  "count": 3
}
```

### 4. POST `/products` (Bonus Feature)

Adds a new product to the collection.

**Request Body:**

```json
{
  "name": "New Product",
  "category": "Electronics",
  "price": 99.99,
  "description": "Product description",
  "stock": 25,
  "image": "https://example.com/product.jpg"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": 9,
    "name": "New Product",
    "category": "Electronics",
    "price": 99.99,
    "description": "Product description",
    "stock": 25,
    "image": "https://example.com/product.jpg"
  }
}
```

### 5. GET `/health`

Health check endpoint.

**Response:**

```json
{
  "success": true,
  "message": "Product API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 🧪 Sample cURL Requests

### Get all products:

```bash
curl -X GET http://localhost:5000/products
```

### Get product by ID:

```bash
curl -X GET http://localhost:5000/products/1
```

### Filter products by category:

```bash
curl -X GET "http://localhost:5000/products?category=Apparel"
```

### Add a new product:

```bash
curl -X POST http://localhost:5000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 29.99,
    "description": "Ergonomic wireless mouse",
    "stock": 40,
    "image": "https://example.com/mouse.jpg"
  }'
```

### Health check:

```bash
curl -X GET http://localhost:5000/health
```