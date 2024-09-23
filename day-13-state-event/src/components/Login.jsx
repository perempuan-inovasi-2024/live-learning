import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const login = (event) => {
    event.preventDefault()

    console.log(username)
    console.log(password)
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Login;
