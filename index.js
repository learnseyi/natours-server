const express = require('express');
const cors = require('cors')
const tourRouter = require('./routes/tourRoute')

const app = express();

app.use(cors())
app.use(express.json());


app.use('/api/v1/tours',tourRouter)




module.exports = app;


// app.get('/api/v1/tours',getAllTours);
// app.post('/api/v1/tours',postTour);
