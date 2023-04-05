const mobileNav = document.querySelector('.mobile-nav')
const mainNavLogo = document.querySelector('#logo')
const closeBtn =  document.querySelector('.fa-xmark')
const showMenu = () => {
    mobileNav.classList.toggle('open')
    mobileNav.classList.toggle('close')

    mainNavLogo.classList.toggle('inactive-logo')
    mainNavLogo.classList.toggle('active-logo')
}

const closeMenu = () => {
    mobileNav.classList.toggle('close')
    mobileNav.classList.toggle('open')
}