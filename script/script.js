const navbarOpen = document.querySelector('#navbar-open')
const navbarClose = document.querySelector('#navbar-close')
const navbar = document.querySelector('nav')

const paralax = document.querySelector('#paralax')

const submit = document.querySelectorAll('input[type="submit"]')
const info = document.querySelector('#redirect')
const infoClose = document.querySelector('#infoClose')



function infoElement() {
    info.style.bottom = '20px'
    infoClose.addEventListener('click', f => {
        info.style.bottom = '-100%'
    })
}



infoElement()

navbarOpen.addEventListener('click', f => {
    navbar.style.right = '0'
})
navbarClose.addEventListener('click', f => {
    navbar.style.right = '-100%'
})

window.addEventListener('scroll', f => {
    let offset = window.pageYOffset
    paralax.style.backgroundPositionY = `${ offset *.5 }px`
})

submit.forEach(item => {
    item.addEventListener('click', f => {
        infoElement()
    })
})