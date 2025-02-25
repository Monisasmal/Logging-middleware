// const express = require("express");
// const morgan = require("morgan");
// const requestLogger = require('./requestLogger');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(morgan('combined'));

// app.use(requestLogger);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });


const express = require('express');
const morgan = require('morgan');
const requestLogger = require('./requestLogger'); 
const app = express();

app.use(morgan('dev'));


app.use(requestLogger);  

// Define a test route
app.get('/', (req, res) => {
  res.send('Hello, Logging Middleware!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

