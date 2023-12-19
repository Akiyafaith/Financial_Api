# Financial Transactions API

This project is a simple API for managing financial transactions.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Fetch All Transactions](#fetch-all-transactions)
  - [Create a Transaction](#create-a-transaction)
  - [Edit a Transaction](#edit-a-transaction)
  - [Delete a Transaction](#delete-a-transaction)
- [Testing with Postman](#testing-with-postman)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js and npm: [Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/transactional-api.git
Navigate to the project directory:


cd financial-api
Install dependencies:


npm install
Running the Application
Create a .env file in the root directory and set the following environment variables:

env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=financial_db
Replace your_password with your MySQL database password.

Start the application:


node app.js
The server will be running at http://localhost:3001.

API Endpoints
Fetch All Transactions
Endpoint: GET /api/transactions

Description: Fetch all financial transactions.

Response Format: JSON

Example Response:

json

[
  {
    "id": 1,
    "amount": 100,
    "description": "Groceries",
    "createdAt": "2023-12-18T12:00:00.000Z",
    "updatedAt": "2023-12-18T12:00:00.000Z"
  },
  // ... other transactions
]
Create a Transaction
Endpoint: POST /api/transactions

Description: Create a new financial transaction.

Request Format: JSON

Example Request Body:

json

{
  "amount": 150,
  "description": "Eating out"
}
Response Format: JSON

Example Response:

json

{
  "id": 2,
  "amount": 150,
  "description": "Eating out",
  "createdAt": "2023-12-18T12:05:00.000Z",
  "updatedAt": "2023-12-18T12:05:00.000Z"
}
Edit a Transaction
Endpoint: PUT /api/transactions/:id

Description: Edit an existing financial transaction.

Request Format: JSON

Example Request Body:

json
{
  "amount": 180,
  "description": "Updated eating out"
}
Response Format: JSON

Example Response:

json

{
  "id": 2,
  "amount": 180,
  "description": "Updated eating out",
  "createdAt": "2023-12-18T12:05:00.000Z",
  "updatedAt": "2023-12-18T12:10:00.000Z"
}
Delete a Transaction
Endpoint: DELETE /api/transactions/:id
Description: Delete a financial transaction by ID.
Testing with Postman
You can use Postman or any API testing tool to interact with the API. Import the provided Postman collection for easy testing.

Postman Collection

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.

Feel free to customize it further based on your project's specific details.





