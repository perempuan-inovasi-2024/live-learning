let todo = [
  {id: 1, task: "belajar js", status: false},
  {id: 2, task: "buat todo", status: false},
  {id: 3, task: "nyoba array of object", status: false},
  {id: 4, task: "belajar web", status: false},
]

// console.log(todo[3].task)

let input = document.getElementById("input-todo")
let btnAdd = document.getElementById("btn-add")
let listTodo = document.getElementById("list-todo")

// menampilkan todo =============================================
function tampilkanTodo() {
  todo.forEach((item, index) => {
    listTodo.innerHTML += `<li id="todo-${item.id}" onclick="clickItem(${item.id})">${item.task}</li>`
  })
}

tampilkanTodo()



// todo di click ===============================================
function clickItem(itemId) {
  let elementItem = document.getElementById(`todo-${itemId}`)
  let todoItem = todo.find(item => item.id == itemId)
  
  if (todoItem.status) {
    ubahStatus(itemId)
    elementItem.setAttribute("class", "")
    return
  }
  
  ubahStatus(itemId)
  elementItem.setAttribute("class", "done")
}


// menambahkan todo ============================================

btnAdd.addEventListener('click', (e) => {
  e.preventDefault()

  if (input.value == "") return

  let newTodo = {
    id: todo[todo.length - 1].id + 1, 
    task: input.value, 
    status: false
  }
  addTodo(newTodo)
})

function addTodo(newTodo){
  todo.push(newTodo)
  listTodo.innerHTML += `<li id="todo-${newTodo.id}" onclick="clickItem(${newTodo.id})">${newTodo.task}</li>`
  console.log(todo)
}





// ubah status todo ============================================
function ubahStatus(id){
  todo = todo.map((item, index) => {
    if (item.id == id) {
      item.status = !item.status
    }
    return item
  })
}



