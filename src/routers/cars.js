const express = require("express");
const router = express.Router();
const { getCars, addCars, seedCars } = require("../controllers/cars");

router.get("/cars", getCars);
router.post("/cars", addCars);
router.get("/cars/seed", seedCars);

module.exports = router;
