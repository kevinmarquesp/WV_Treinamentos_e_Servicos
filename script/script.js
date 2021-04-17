const navbarOpen = document.querySelector('#navbar-open')
const navbarClose = document.querySelector('#navbar-close')
const navbar = document.querySelector('nav')

navbarOpen.addEventListener('click', f => {
    navbar.style.right = '0'
})
navbarClose.addEventListener('click', f => {
    navbar.style.right = '-100%'
})