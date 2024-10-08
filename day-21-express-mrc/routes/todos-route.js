const express = require("express");
const {
  getAllTodo,
  getTodoById,
  addTodo,
  editTodoById,
  deleteTodoById,
} = require("../controllers/todos-controller");
const router = express.Router();

router.get("/", getAllTodo);
router.get("/:id", getTodoById);
router.post("/", addTodo);
router.put("/:id", editTodoById);
router.delete("/:id", deleteTodoById);

module.exports = router;
