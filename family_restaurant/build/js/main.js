const initApp=()=>{
    const hamburgerBtn=document.getElementById('hamburger-button')
    const mobileMenu=document.getElementById('menu')
    
    
    const toggleMenu=()=>{
        mobileMenu.classList.toggle('flex')
        mobileMenu.classList.toggle('hidden')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click',toggleMenu)
    mobileMenu.addEventListener('click',toggleMenu)
}

document.addEventListener('DOMContentLoaded',initApp)