const express = require('express');

// const db = require('../data/helpers/carModel');


const carRouter = express.Router();

carRouter.get('/', getAllCars);
// carRouter.post('/', addCar);

function getAllCars(req,res) {
    res.send(`<h2>Let's write some middleware!</h2>`)
}


// function addCar(req,res) {

// }
module.exports = carRouter