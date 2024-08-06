const dbConnect = require('./dbConnection');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

// all routes
const itemsRoute = require('./routes/itemsRoute');

// middleware
app.use(express.json());
app.use(cors());

app.use('/api', itemsRoute);


app.get('/', (req, res)=>{
   res.send('Welcome to MERN Pos Application');
})

app.listen(port, ()=>{
   console.log(`App is running on port: ${port}`);
})