const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { getTodos, saveTodos } = require("./services/todos");
const Todo = require("./classes/todo");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    code: 200,
    message: "Hi"
  });
});

app.get("/todos", async (req, res) => {  
  try {
    let todos = await getTodos();
    res.status(200).json({
      todos
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      error: error.message
    });
  }
});

app.post("/todos", async (req, res) => {
  
  try {
    let savedTodos = await getTodos();
    let maxId = savedTodos.length > 0? Math.max(savedTodos.map(m => m.id)): 1;
    let todos = [...savedTodos, new Todo({ id: maxId, description: req.body.description, date: req.body.date })];
    saveTodos(JSON.stringify(todos));
    res.status(200).json({
      mesasge: "Added successfully."
    })
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err.mesasge
    });
  }
  
  
})

app.delete("/todos/:todo_id", (req, res) => {
  // TODO: Delete the passed todo id from the list of todos.
  res.status(200).json({
    message: "Yet to be implemented."
  })
});

let PORT = 4000;
app.listen(PORT, () => {
  console.log("App is listening on port: " + PORT)
});