require("dotenv").config();
const express = require("express");
const Cars = require("./src/models/Cars");
const connectDB = require("./db/db");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*----------------------------- From notes -----------------------------*/

const mongoose = require("mongoose");
const Todo = require("./models/todo.js");

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
  await runQueries();

  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
  process.exit();
};

connect();

/*----------------------------- Query Functions -----------------------------*/

const createTodo = async () => {
  const todoData = {
    text: "learn React",
    isComplete: false,
  };
  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
};

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log("Queries running.");
  await createTodo();
};
