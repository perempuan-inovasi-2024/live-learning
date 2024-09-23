import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Digimon from "./components/Digimon";
import TodoList from "./components/TodoList";
import PageTemplate from "./PageTemplate";
import { useState } from "react";
import DetailPokemon from "./components/DetailPokemon";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/todo"
            element={isLogin ? <TodoList /> : <Navigate to="/login" />}
          />
          <Route path="/pokemon" element={<Digimon />} />
          <Route path="/pokemon/:id" element={<DetailPokemon />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  )
}

export function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export function Login() {
  const navigate = useNavigate()

  function login (e) {
    e.preventDefault()
    // proses pengecekan akun
    // jika cocok, pindah ke pokemon
    navigate("/pokemon")
  }

  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="text" />
        <input type="text" />
        <button onClick={login}>Login</button>
      </form>
    </>
  );
}

export function Register() {
  return (
    <>
      <h1>Register</h1>
    </>
  );
}

export default App;
