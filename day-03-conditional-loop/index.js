console.log('Hello World')

// CONDITIONAL ==============================================================

// tampilkan keputusan berdasarkan warna lampu
// hijau -> jalan
// kuning -> pelan2
// merah -> berhenti
// selain di atas -> lampu rusak, hati2

// if ----------------------------------------
let lampu = "kuning"

if (lampu == "hijau") {
  console.log("jalan")
} else if (lampu == "kuning") {
  console.log("hati2");
} else if (lampu == "merah") {
  console.log("berhenti")
} else {
  console.log("lampu rusak, hati2");
}

// swtich ------------------------------------
switch (lampu) {
  case "hijau" : 
    console.log("jalan")
    break
  case "kuning":
    console.log("hati2");
    break
  case "merah":
    console.log("berhenti");
    break
  default: 
    console.log("lampu rusak");
}

// ternary opertator ----------------------------
condition ? benar : salah
lampu == "hijau" ? console.log("jalan") : 
lampu == "kuning" ? console.log("hati2") : 
console.log("berhenti");


// LOOP ================================================================
// counted loop -----------------------------------
// perulangan yg masih bisa dihitung, pakai for
// For
for (let i = 0; i <= 5; i++) {
  console.log(i);
}


// uncounted loop --------------------------------
// mirip seperti if, tapi di looping
let i = 1
while (i <= 5) {
  console.log(i)
  i++
}

let j = 1
do {
  console.log(j)
  j++
} while (j <= 5)

// mencari angka yg paling kecil =======================================
// 1. siapkan array
// 2. siapkan min, di isi oleh array pertama
// 3. siapkan loop (for), untuk telusuri array
// 4. tanyakan angka yg ditelusuri pakai if
// 5. buat kondisi if, apakah angka yg ditelusuri < min
// 6. kalau kondisi benar, maka ganti min dengan angka yg ditelusuri
// 7. berhasil mendapatkan min sebagai angka terkecil

let angka = [2, 4, 1]
let min = angka[0]

for (let i = 0; i < angka.length; i++){
  if (angka[i] < min ) {
    min = angka[i]
  }
}
console.log(min);