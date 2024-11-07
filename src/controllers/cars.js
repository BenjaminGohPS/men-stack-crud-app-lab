const Cars = require("../models/Cars");

const getCars = async (req, res) => {
  const cars = await Cars.find();
  if (cars.length > 0) {
    res.json(cars);
  } else {
    res.json("Please input cars into the database");
  }
};

const addCars = async (req, res) => {
  console.log("adding cars function");
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
        model: "A3",
        type: "Saloon",
      },
    ]);
    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

module.exports = { getCars, addCars, seedCars };
