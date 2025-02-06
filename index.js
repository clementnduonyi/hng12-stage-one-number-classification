  const express = require('express');
  const cors = require('cors');
  const axios = require('axios');

  const app = express();
  app.use(cors());


  //relevant functions
  const isPrime = (num) => {
      // isPrime checks if a number is prime, if it is, it return true
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
         for (let i = 5; i * i <= num; i += 6) {
               if (num % i === 0 || num % (i + 2) === 0) return false;
      }
       return true;
   };


   const isPerfect = (num) => {
      // isPerfect checks fir perfect numbers
      let sum = 1;
         for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
               sum += i;
               if (i !== num / i) sum += num / i;
            }
         }
      return num > 1 && sum === num;
   };
   

   const isArmstrong = (num) => {
      // this function determines if number is an Armstrong
      const digits = num.toString().split("");
      const power = digits.length;
      const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
         return sum === num;
   };
      

   const digitSum = (num) => num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);


   // API ENDPOINT
   app.get('/api/classify-number', async (req, res) =>{
      console.log(req.query)
      const numberParam = req.query.number;

      // Validate input
      if (!numberParam || isNaN(numberParam)) {
         return res.status(400).json({
            numberParam,
            error: true,
         });
      }

      const num = parseInt(numberParam);
      const properties = [];

      if (isArmstrong(num)) properties.push("armstrong");
         properties.push(num % 2 === 0 ? "even" : "odd");

      
      try {
         // Get fun fact from numbersapi
         const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
         const funFact = funFactResponse.data.text;

         res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: digitSum(num),
            fun_fact: funFact
         });
      } catch (error) {
            res.status(500).json({error: "Failed to fetch funfact"})                                                                                                                        
         }
   });


   //Server setup
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });

  