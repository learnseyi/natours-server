const mongoose = require('mongoose');



const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'A tour must have a name'],
    unique: true
  },
  ratingAverage:{
    type:Number,
    default: 4.5
  },
  ratingQuantity:{
    type: Number,
    default: 0
  },
  maxGroupSize: {
    type:Number,
    required: true
  },
  price:{
    type: Number,
    required: [true,'A tour must have a price']
  },
  date:{
    type: Date,
    default: Date.now()
  },
  summary:{
    type: String,
    required: [true,'A tour must have a summary']
  },
  description:{
    type: String,
    required: [true, 'A tour must have a description']
  },
  imageCover: String,
  images: [String],
  startDates:{
    type: [Date],
    required: [true, "A tour must have a start date"]
  }
})

const Tour = mongoose.model('Tour',tourSchema)

module.exports = Tour;