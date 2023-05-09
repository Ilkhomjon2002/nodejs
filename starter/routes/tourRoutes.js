const express = require('express');
const tourController = require('../controllers/tourController');
const router = express.Router();

tourRouter
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.addNewTour);
tourRouter
  .route('/:id')
  .get(tourController.getTour)
  .delete(tourController.deleteTour)
  .patch(tourController.updateTour);
