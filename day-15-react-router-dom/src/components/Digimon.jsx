import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Digimon() {
  const navigate = useNavigate()
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    getDigimon()
  }, [])

  async function getDigimon() {
    try {
      let URL = "https://pokeapi.deno.dev/pokemon/"
      const response = await fetch(URL)
      const result = await response.json()
  
      setDigimons(result)
    } catch (e) {
      console.log(e)
    }
  }

  function toDetail (id) {
    navigate("/")
  }

  return (
    <div>
      {digimons.length == 0 ? <h1>Loading...</h1> : 
      <div className="grid grid-cols-4 gap-4">
        {digimons.map((item) => (
          <Link key={item.id} to={"/pokemon/" + item.id}>
            <div key={item.id} 
              className="border border-black text-center" 
              // onClick={() => navigate(`/pokemon/${item.id}`)}
            >
              <img src={item.imageUrl} alt="" width={200}/>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      }
    </div>
  );
}

export default Digimon;
