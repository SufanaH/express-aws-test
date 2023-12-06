const express = require('express');
const app = express();

const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Server");
});

app.get("/products", (req, res) => {
    res.send({
         products: [
            { id: 1, name: "Product 1", price: 19.99 },
            { id: 2, name: "Product 2", price: 29.99 },
            { id: 3, name: "Product 3", price: 39.99 },
            { id: 3, name: "Product 4", price: 49.99 },
          ]
    })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
