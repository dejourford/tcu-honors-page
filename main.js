const mobileNav = document.querySelector('#mobile-nav')
const mainNavLogo = document.querySelector('#logo')

const showMenu = () => {
    mobileNav.classList.toggle('active-nav')
    mainNavLogo.classList.toggle('inactive-logo')
    mainNavLogo.classList.toggle('active-logo')
}