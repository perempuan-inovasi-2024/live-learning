import { useState } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  const [isEdit, setIsEdit] = useState(false);
  const [todoId, setTodoId] = useState(0);

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, task: "belajar react", status: false },
    { id: 2, task: "bikin state", status: false },
    { id: 3, task: "belajar lifecycle", status: false },
  ]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addTodo(e) {
    e.preventDefault();

    if (isEdit) {
      let newTodos = todos.map((item) => {
        if (todoId == item.id) {
          item.task = input;
        }
        return item;
      });

      console.log(newTodos);
      setTodos(newTodos);
      setInput("");
      setIsEdit(false);
    } else {
      setTodos([
        ...todos,
        { id: todos[todos.length - 1].id + 1, task: input, status: false },
      ]);
      setInput("");
    }
  }

  function editTodo(todo) {
    console.log(todo);

    setInput(todo.task);
    setTodoId(todo.id);
    setIsEdit(true);
  }

  return (
    <div>


      <h1>Todo list</h1>
      <form>
        <input
          type="text"
          placeholder="input your todo"
          value={input}
          onChange={handleInput}
        />
        <button onClick={addTodo}>{isEdit ? "Edit" : "Add"}</button>
      </form>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span onClick={() => editTodo(item)}>✏️</span>
            {item.task}
            <span>❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
