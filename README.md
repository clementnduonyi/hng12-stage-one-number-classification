# Number Classification API

## Description
   This API classifies numbers based on their mathematical properties and provides a fun fact using the Numbers API.

## Setup Instructions
1. Clone the repository:
   ```bash
      git clone https://github.com/clementnduonyi/hng2-stage-one-number-classification.git
         cd hng12-stage-one-number-classification
2. Install dependencies:
   ```bash
      npm install
   
3. Run the server:
   ```bash
      node index.js
   
   Test the API: Visit http://localhost:3000/api/classify-number?number=371 in your browser.

## API Documentation
   Endpoint
   GET /api/classify-number?number=<number>

   Example Request
   GET /api/classify-number?number=371

   Success Response (200 OK)
   ```json
   {
      "number": 371,
      "is_prime": false,
      "is_perfect": false,
      "properties": ["armstrong", "odd"],
      "digit_sum": 11,
      "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
   }
   ````
   Error Response (400 Bad Request)
   ```json
   {
      "number": "alphabet",
      "error": true
   }
   ```
                         
   [Looking to hire experineced Nodesjs developer? Follow this link](https://hng.tech/hire/nodejs-developers) 
                  

                         





