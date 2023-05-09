const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

///1) Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//-------------------------------

///3)Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//-------------------------------

///4)Server running
const port = 8000;

app.listen(port, 'localhost', () => {
  console.log(`App is running on port ${port}...`);
});
