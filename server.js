const dbConnect = require('./dbConnection');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

// all routes
const itemsRoute = require('./routes/itemsRoute');
const userRoute = require('./routes/usersRoute');
const billRoute = require('./routes/billRoute');

// middleware
app.use(express.json());
app.use(cors());

// all route path
app.use('/api', itemsRoute);

app.use('/api/user',userRoute);
app.use('/api/bill',billRoute);


app.get('/', (req, res)=>{
   res.send('Welcome to MERN Pos Application');
})

app.listen(port, ()=>{
   console.log(`App is running on port: ${port}`);
})