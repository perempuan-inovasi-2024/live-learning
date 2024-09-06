// mencari angka terkecil dari array
function findSmallNumber(arr){
  let min = arr[0]

  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  return min
}

let angka = findSmallNumber([2,4,5]) // 2
console.log(angka);

console.log(findSmallNumber([3,6,4,1])); // 1



// function clasic ===========================================
// bisa hoisting
console.log(greeting("Rusydina"));
function greeting(nama){
  let hello = "hallo " + nama;
  
  if (hello.length < 0) {
    hello = "Hallo"
  }

  return hello;
}

// function variable =========================================
// bisa untuk membuat method di dalam object
const greeting2 = function(nama) {
  let hello = "hallo " + nama;
  return hello;
}
console.log(greeting("Tria"));

let kucing = {
  warna: "oren",
  makanan: "ikan",
  suara: function () {
    console.log("miaaaw");
  }
}


// arrow function ============================================
// bisa untuk membuat method di dalam object
// bisa me-return tanpa return
const greeting3 = (nama) => {
  let hello = "hallo " + nama;
  return hello;
}
console.log(greeting("Valent"));

const greeting4 = (nama) => "hallo " + nama
console.log(greeting("Ardhilla"));





// Convert Nilai ==================================================
function convertNilai (nilai) {
  if (nilai >= 0.9 && nilai <= 1) {
    return "A"
  } else if (nilai >= 0.8 && nilai < 0.9) {
    return "B"
  } else if (nilai >= 0.7 && nilai < 0.8) {
    return "C"
  } else if (nilai >= 0.6 && nilai < 0.7) {
    return "D"
  } else {
    return "E"
  } 
}

console.log(convertNilai(1.1))
console.log(convertNilai(1))
console.log(convertNilai(0.8234))