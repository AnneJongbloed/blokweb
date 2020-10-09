var navbar = document.querySelector("nav")
var ham = document.querySelector("button")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

var menuLinks = document.querySelectorAll("a")

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)