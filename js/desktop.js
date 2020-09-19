
const desktop = window.matchMedia("screen and (max-width: 900px)", removeMenuIcon);

function removeMenuIcon (event) {  
  if (event.matches) {
    menuContainer.addEventListener("click", displayMenu)  
  } else {
    menuContainer.removeEventListener("click", displayMenu)
    menuContainer.classList.remove("icon-menu")
    menu.classList.remove("menu-movile-active")
  }
} removeMenuIcon(desktop)



