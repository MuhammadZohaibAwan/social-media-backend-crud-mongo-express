const express = require("express");
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log('connected to mongoDB');
});

// model testing import 
const User = require('./models/Users');

app.get('/users', (req, res) => {
  res.send('welcome to user page ')
})

app.get('/', (req, res) => {
  res.send('welcome to home page ')
})

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

// api routes 
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)




app.listen(8080, () => {
  console.log("backend server is running ");
});
