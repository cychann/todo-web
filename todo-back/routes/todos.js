const express = require("express");
const router = express.Router();
const Todo = require("../models/todos");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    if (!todos) return res.status(404).send({ error: "Todo not found" });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { content } = req.body;

    const newTodo = new Todo({
      isChecked: false,
      content,
    });

    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    const { isChecked } = req.body;

    const filter = { _id: todoId };
    const update = { isChecked };

    const updatedTodo = await Todo.findOneAndUpdate(filter, update, {
      new: true,
    });

    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
