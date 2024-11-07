const Cars = require("../models/Cars");
const mongoose = require("mongoose");

const getCars = async (req, res) => {
  const cars = await Cars.find();
  if (cars.length > 0) {
    res.json(cars);
  } else {
    res.json({ status: "error", msg: "Please input cars into the database" });
  }
};

const addCars = async (req, res) => {
  console.log("add car function");
};

const getSingleCar = async (req, res) => {
  const carId = req.params.id;

  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ status: "error", msg: "Invalid car ID" });
  } else {
    const cars = await Cars.findById(req.params.id);
    if (cars) {
      res.json(cars);
    } else {
      res.json({ status: "error", msg: "Car not found" });
    }
  }
};

const deleteSingleCar = async (req, res) => {
  const cars = await Cars.findById(req.params.id);
  if (cars) {
    await Cars.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "Car deleted" });
  } else {
    res.json({ status: "error", msg: "Car not found" });
  }
};

const seedCars = async (req, res) => {
  await Cars.deleteMany({});

  try {
    await Cars.create([
      {
        _id: "672ad73be33bf6cac70f3356",
        brand: "Mercedes-Benz",
        model: "C-Class",
        type: "Saloon",
      },
      {
        _id: "672ad73be33bf6cac70f3357",
        brand: "BMW",
        model: "3 Series",
        type: "Saloon",
      },
      {
        _id: "672ad73be33bf6cac70f3358",
        brand: "Audi",
        model: "A5",
        type: "Saloon",
      },
    ]);
    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

module.exports = { getCars, addCars, seedCars, getSingleCar, deleteSingleCar };
