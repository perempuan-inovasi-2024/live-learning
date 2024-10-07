const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let todos = [
  { id: 1, task: "belajar backend", status: false },
  { id: 2, task: "makan", status: false },
  { id: 3, task: "tidur", status: false },
  { id: 4, task: "nyoba buat server", status: false },
  { id: 5, task: "pakai express", status: false },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "selamat datang di express",
  });
});

// get All todo
app.get("/todos", (req, res) => {
  res.status(200).json({
    message: "berhasil mendapatkan data todos",
    data: todos,
  });
});

// add todo
app.post("/todos", (req, res) => {
  let data = req.body;

  let newTodo = {
    id: todos[todos.length - 1].id + 1,
    ...data,
  };

  todos.push(newTodo);

  res.json({
    message: "berhasil menambahkan todo baru",
  });
});

// get todo by id
// edit todo by id
// delete todo by id

app.listen(PORT, () => {
  console.log("server runnning on port " + PORT);
});
