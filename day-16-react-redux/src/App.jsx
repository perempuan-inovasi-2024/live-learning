import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import ProductItem from "./components/ProductItem"


function App() {
  return (
    <>
      <Navbar />

      <ProductItem product={{name:"pensil", price:"1000"}} />
      <ProductItem product={{name:"penghapus", price:"500"}} />


    </>
  )
}

export default App
