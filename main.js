const mobileNav = document.querySelector('.mobile-nav')
const mainNavLogo = document.querySelector('#logo')
const closeBtn =  document.querySelector('.fa-xmark')
const heroMenus = document.querySelectorAll('.hero-main-nav-links')
const heroSubNavLinks = document.querySelector('.hero-sub-nav-links')

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

// create function for hero menus
const openMenu = () => {
    heroSubNavLinks.classList.toggle('open-hero-menu')
    console.log()
}

const hideMenu = () => {
    heroSubNavLinks.classList.toggle('open-hero-menu')
    
}