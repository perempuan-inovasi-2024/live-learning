const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id)

let title = document.getElementById("title")
let img = document.getElementById("image")
let description = document.getElementById("description")

async function getDetailPokemon() {
  let URL = `https://pokeapi.deno.dev/pokemon/${id}`
  let respons = await fetch(URL)
  let pokemon = await respons.json()

  console.log(pokemon)
  title.innerHTML = pokemon.name
  img.setAttribute("src", pokemon.imageUrl)
  description.innerHTML = pokemon.description
}
getDetailPokemon()