const express = require("express");
const router = express.Router();
const {
  getCars,
  addCars,
  getSingleCar,
  deleteSingleCar,
  seedCars,
} = require("../controllers/cars");

router.get("/cars", getCars);
router.post("/cars", addCars);
router.get("/cars/:id", getSingleCar);
router.delete("/cars/:id", deleteSingleCar);
router.get("/car/seed", seedCars);

module.exports = router;
