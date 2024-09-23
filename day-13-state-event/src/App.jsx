import { useState } from "react"
import Counter from "./components/Counter"
import Login from "./components/Login"

function App() {
  const [name, setName] = useState("Auzan")
  const [buah, setBuah] = useState(["Jeruk", "Pepaya", "rambutan"])

  const  h1Click = () => {
    console.log("hallo")
    setName("Ojan")
  }

  return (
    <>
      <h1 onClick={h1Click}>Hallooo {name}</h1>

      <Counter />

      <Login />

      <p>{buah[0]}</p>
      <p>{buah[1]}</p>
      <p>{buah[2]}</p>

      {buah.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  )
}

export default App
