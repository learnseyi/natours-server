
const express = require('express')
const tourController = require('../controller/tourController')

const router = express.Router();

router.get('/:id',tourController.getTour)
router.route('/')
.get(tourController.getAllTours)
.post(tourController.postTour)
.delete(tourController.deleteTour)
.patch(tourController.updateTour);

module.exports = router
