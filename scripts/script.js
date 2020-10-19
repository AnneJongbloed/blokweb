var navbar = document.querySelector("nav")
var ham = document.querySelector("button")
var prijs = document.getElementById('demo')
var afmeting = document.getElementById('afmeting')

ham.addEventListener("click", toggleHamburger)

function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
}

var menuLinks = document.querySelectorAll("button")



function changePrice() {
    prijs.innerHTML = "€" + afmeting.value
}
afmeting.addEventListener('change', changePrice)
