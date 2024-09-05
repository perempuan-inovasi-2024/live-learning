let hewan = ["kucing", "kelinci", "kambing", "rusa"]
console.log(hewan)

// hewan.push("rusa")
// hewan.unshift("koala")

// hewan.shift()
// hewan.shift()
// hewan.shift()

// let hewanSlice = hewan.slice(1,3)
let hewanSplice = hewan.splice(1,3)

// console.log(hewanSlice)
console.log(hewanSplice)
console.log(hewan)

let buah = ["pepaya", "jeruk", "alpukat", "mangga"]
// console.log(buah)

// let buahSplice = buah.splice(2,0,"anggur")
// console.log(buahSplice)
// console.log(buah)

buah.forEach((item, index) => {
  console.log(item, index)
})

let jus = buah.map((item, index) => {
  return "jus " + item
})
console.log(jus)

// [ganjil, genap, genap, ganjil, ganjil, genap]
// let plat = [23,64,34,21,75,86] 

// let platGanjilGenap = plat.map((item, index) => {
//   if (item % 2 == 0) {
//     return "genap"
//   }

//   return "ganjil"
// })
// console.log(plat)
// console.log(platGanjilGenap)

// EKSPEKSTASI 1 ===================
// [
//   {plat: 23, status: "ganjil"},
//   {plat: 64, status: "genap"},
//   {plat: 34, status: "genap"},
//   {plat: 21, status: "ganjil"},
//   {plat: 75, status: "ganjil"},
//   {plat: 36, status: "genap"},
// ]
// =================================
let plat = [23,64,34,21,75,86] 

let platGanjilGenap = plat.map((item, index) => {
  let obj = {
    plat: item,
    status: ""
  }

  if (item % 2 == 0){
    obj.status = "genap"
    return obj
  }

  obj.status = "ganjil"
  return obj
})
console.log(plat)
console.log(platGanjilGenap)

// EKSPEKSTASI 2 ===================
// [64, 34, 86]
// =================================
// plat = [23,64,34,21,75,86] 

let platGenap = plat.filter((item, index) => {
  if (item % 2 == 0) return item
})
console.log(platGenap)

// EKSPEKSTASI 3 ===================
// 21
// =================================
// plat = [23,64,34,21,75,86] 

let findData = plat.find((item) => {
  if (item == 21) return item
})

console.log(findData)