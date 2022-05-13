const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use('/api/v1/tours', tourRouter); //using middleware
app.use('/api/v1/users', userRouter); //using middleware

module.exports = app;
