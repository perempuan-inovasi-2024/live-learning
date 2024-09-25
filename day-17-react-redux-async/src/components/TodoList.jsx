import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getAllTodos } from "../redux/todoSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todo);

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <div>
      <h1>Todo</h1>
      <form>
        <input
          type="text"
          placeholder="input your todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </form>

      <ul>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          todos.map((item) => <li key={item.id}>{item.task}</li>)
        )}
      </ul>
    </div>
  );
}
