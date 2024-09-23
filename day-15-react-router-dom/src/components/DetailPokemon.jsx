import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function DetailPokemon() {
  const {id} = useParams ()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    getPokemonById()
  }, [])

  async function getPokemonById () {
    const response = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`)
    const data = await response.json()

    setPokemon(data)
  }

  return (
    <>
      {pokemon == null ? <h1>Loading</h1> : 
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.imageUrl} alt="" />
          <p>{pokemon.description}</p>
        </div>
      }
    </>
  )
}

export default DetailPokemon