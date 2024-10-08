const Todos = require("../models/Todo");

module.exports = {
  getAllTodo: (req, res) => {
    res.json({
      message: "berhasil mendapatkan semua todos",
      data: Todos,
    });
  },
  getTodoById: (req, res) => {
    const { id } = req.params;

    const findTodo = Todos.find((item) => item.id == id);

    res.json({
      message: "berhasil mendapatkan todo by ID",
      data: findTodo,
    });
  },
  addTodo: (req, res) => {
    let data = req.body;

    let newTodo = {
      id: Todos[Todos.length - 1].id + 1,
      ...data,
    };

    Todos.push(newTodo);

    res.json({
      message: "berhasil menambahkan todo baru",
    });
  },
  editTodoById: (req, res) => {},
  deleteTodoById: (req, res) => {},
};
