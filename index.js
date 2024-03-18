const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

const user {
     name : "Prankul Singhal";
     email : "prankul040.be21@chitkara.edu.in";
     rollNumber : "2110991040";
     phone : "7688837017";
}


app.post('URL: https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', (req, res) => {
  try {
    const data = req.body.data;
    headers: {
        'Content-Type': 'application/json'
    };
    const response = {
      is_success: true,
      name : name,
      email: email,
      roll_number: rollNumber,
      phone : phone
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
