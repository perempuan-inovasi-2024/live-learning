import { useEffect, useState } from "react";

function Digimon() {
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

  return (
    <div>
      {digimons.length == 0 ? <h1>Loading...</h1> : 
      <div>
        {digimons.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt="" width={200}/>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      }
    </div>
  );
}

export default Digimon;
