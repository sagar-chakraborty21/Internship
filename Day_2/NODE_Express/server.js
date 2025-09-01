const express = require('express');
const app = express(); //express js call
const port = 5600;

app.use(express.json());

// dummy product
const products = [
  { id: 1, name: 'laptop', price: 45000 },
  { id: 2, name: 'mobile', price: 25000 },
  { id: 3, name: 'watch', price: 5000 },
  { id: 4, name: 'tablet', price: 15000 },
  { id: 5, name: 'camera', price: 55000 },
];

// basic routing
app.get('/', (req, res) => {
  res.send('home page');
});

// fetch all data
app.get('/products', (req, res) => {
  res.json ({
    message:"Product List",
    total: products.length,
    data: products,
  });
});

//data search product name wise
app.get("/products/search",(req,res)=>{
    const {name}= req.query; //search query based
    //filter
    const result = products.filter(x=>
        x.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json({
        message:"Product search list",
        total:result.length,
        data:result,
    });
});

// data import
app.post('/products/add', (req, res) => {
    const {name, price} = req.body;
    //create new product
    const newProduct = {
        id: products.length + 1,
        name,  
        price 
    };
  products.push(newProduct);
  res.json({
    message: "Product Added Successfully",
    data: newProduct,
  });
});

// single based product search
app.get('/products/:id', (req, res) => {
    
});
// how to run port 
app.listen(port, () => {    
  console.log(`Example app listening on port ${port}`);
});
