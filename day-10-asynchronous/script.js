let API = "https://pokeapi.deno.dev/pokemon?limit=10";

let listPokemon = document.getElementById("list-pokemon");

// PROMISE =====================================================================
// fetch(API)
// .then((respons) => respons.json())
// .then(result => {
//   console.log("dua")
//   console.log(result)

//   result.map((item) => {
//     listPokemon.innerHTML += `
//     <div class="col">
//       <div class="card h-100">
//         <img src="${item.imageUrl}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${item.name}</h5>
//         </div>
//       </div>
//     </div>
//     `
//   })
// })
// .catch((e) => {
//   console.log(e)
// })

// ASYNC AWAIT =================================================================
async function getPokemon() {
  let respons = await fetch(API);
  let pokemons = await respons.json();

  pokemons.map((item) => {
    listPokemon.innerHTML += `
        <div class="col" onclick="handleClickCard('${item.name}', ${item.id})">
          <div class="card h-100">
            <img src="${item.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
            </div>
          </div>
        </div>
        `;
  });
}
getPokemon()

function handleClickCard(nama, id) {
  console.log(nama, id)

  window.location.href = `./detail.html?id=${id}`
}
