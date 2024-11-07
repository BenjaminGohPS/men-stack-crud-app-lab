require("dotenv").config();
const express = require("express");
const cars = require("./src/routers/cars");
const connectDB = require("./src/db/db");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/lab", cars);

/*----------------------------- From notes -----------------------------*/

/*----------------------------- Query Functions -----------------------------*/

// const createTodo = async () => {
//   const todoData = {
//     text: "learn React",
//     isComplete: false,
//   };
//   const todo = await Todo.create(todoData);
//   console.log("New todo:", todo);
// };

// const findTodos = async () => {
//   const todos = await Todo.find({});
//   console.log("All todos:", todos);
// };

/*------------------------------- Run Queries -------------------------------*/

// const runQueries = async () => {
//   console.log("Queries running.");
//   await createTodo();
// };

app.listen(5001);
