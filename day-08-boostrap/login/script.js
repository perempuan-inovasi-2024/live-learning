let btnLogin = document.getElementById('btn-login')

// let userRegist = {
//   email: "auzan@gmail.com",
//   password: "12345"
// }

btnLogin.addEventListener('click', (e) => {
  e.preventDefault()

  let email = document.getElementById("email").value
  let password = document.getElementById('password').value

  if (email == userRegist.email && password == userRegist.password) {
    console.log("berhasil login")
  } else {
    console.log("gagal login")
  }
})