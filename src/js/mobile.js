
// const burgerMenu = window.matchMedia("screen and (max-width: 768px)", viewBurgerMenu);

// function viewBurgerMenu (event) {
//   debugger
//   (event.matches)
//   ? menuContainer.addEventListener("click", displayMenu)
//   : menuContainer.removeEventListener("click", displayMenu)
// }
import css from "../sass/mobile.scss"

const menuContainer = document.querySelector('menu')
const menu = document.getElementById("menu")
menuContainer.addEventListener("click", displayMenu)

function displayMenu () {
  (menu.classList.contains('menu-mobile-active'))
    ? menu.classList.remove("menu-mobile-active")
    : menu.classList.add("menu-mobile-active")
}


