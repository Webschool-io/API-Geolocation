const express = require('express');
const parkingRouter = express.Router();

const routes = function (Parking) {

const parkingController = require('../controllers/parkingController')(Parking);

parkingRouter.route('/')
    .get(parkingController.get)
    .post(parkingController.post);

    return parkingRouter;
}

module.exports = routes
