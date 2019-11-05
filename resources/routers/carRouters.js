const express = require('express');
console.log(process.env.NODE_ENV);

const db = require('../data/helpers/carModel');


const carRouter = express.Router();

carRouter.get('/', getAllCars);
carRouter.get('/:id', getCarById);
carRouter.post('/', addCar);
carRouter.put('/:id', updateCar);
carRouter.delete('/:id', deleteCar);


function deleteCar(req, res) {
    db.remove(req.params.id)
    .then(() => {
        res.status(204)
    })
    .catch(error => {
        res.status(500).json({ message: 'this went wrong: ' + error.message });
      })
}

function updateCar(req, res) {
   //Can be written but skipped on purpose.
}

function getCarById(req, res) {
db.findById(req.params.id)
.then(car => {
    res.status(200).json(car)
})
.catch(error => {
    res.status(500).json({ message: 'this went wrong: ' + error.message });
  })
}

function getAllCars(req, res) {
    db.find()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({ message: 'this went wrong: ' + error.message });
      })
    
}


function addCar(req,res) {
    db.insert(req.body).then(newCar => {
        res.status(201).json({
            success: true,
            newCar
        })
    })
}
module.exports = carRouter