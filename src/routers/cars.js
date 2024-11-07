const express = require("express");
const router = express.Router();
const {
  getCars,
  addCars,
  seedCars,
  getSingleCar,
} = require("../controllers/cars");

router.get("/cars", getCars);
router.post("/cars", addCars);
router.get("/cars/:id", getSingleCar);
router.get("/cars/seed", seedCars);

module.exports = router;
