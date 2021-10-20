// show menu
const navList = document.getElementById('nav-list')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navList.classList.remove('show-menu')
    })
}