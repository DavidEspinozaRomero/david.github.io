
let menu = document.getElementById("menu")

function displayMenu (menu) {
  if (menu.classList === "menu1") {
    menu.classList.remove("menu1")
  } else {
    menu.classList.add("menu")
  }
}
console.log(menu)

function click () {
  document.addEventListener("click", displayMenu)  
}