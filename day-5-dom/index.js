// const h1 = document.getElementsByTagName("h1")
// console.log(h1[1])

const heading = document.getElementById("heading")
const body = document.getElementsByTagName("body")[0]

console.log(heading)

heading.innerHTML = "Hello <a href='#'>link</a>"

heading.addEventListener("click", () => {
  console.log("heading di click")
  // cara 1 ----------------
  // heading.innerHTML = "<img src='https://awsimages.detik.net.id/community/media/visual/2022/11/07/kasus-kucing-mati-dilempar-batu-di-jakarta-kronologi-hingga-penyebab-1.jpeg?w=1200' width='200' />"
  
  // cara 2 ----------------
  heading.remove()
  let img = document.createElement("img")
  img.setAttribute("src", "https://awsimages.detik.net.id/community/media/visual/2022/11/07/kasus-kucing-mati-dilempar-batu-di-jakarta-kronologi-hingga-penyebab-1.jpeg?w=1200")
  img.setAttribute("width", 200)

  body.append(img)
})


// =============== convert nilai ===================
// 1. ambil elementnya
// 2. kasih tombol submit event click
// 3. buat logic untuk convert nilai
// 4. tampilkan hasil ketika di submit

let nilai = document.getElementById("nilai")
let submit = document.getElementById("btn-submit")
let result = document.getElementById("result")

submit.addEventListener('click', (event) => {
  event.preventDefault()
  
  result.textContent = convertNilai(nilai.value)
  
  nilai.value = convertNilai(nilai.value)
})

function convertNilai(nilai) {
  if (nilai >= 90 && nilai <= 100) {
    return "A"
  } else if (nilai >= 80 && nilai < 90) {
    return "B"
  } else if (nilai >= 70 && nilai < 80) {
    return "C"
  } else if (nilai >= 60 && nilai < 70) {
    return "D"
  } else {
    return "E"
  }
}







// =============== nampilin card hewan =============

let listHewan = document.getElementById("list-hewan")

let hewan = ["kucing", "kambing", "domba"]

for (let i = 0; i < hewan.length; i++){
  console.log(hewan[i])

  let hewanCard = `<div class="card">${hewan[i]}</div>`

  listHewan.innerHTML += hewanCard
}

