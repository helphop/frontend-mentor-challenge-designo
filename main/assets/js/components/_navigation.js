const nav = document.querySelector(".header .nav")
const openTrigger = nav.querySelector(".nav__icon--open")
const closeTrigger = nav.querySelector(".nav__icon--close")
const navList = document.querySelector(".nav__list")
let isOpen = false;

nav.addEventListener('click', (e) => {
  toggleMenu()
  setMenuState();
})

// listen for key events
window.addEventListener('keyup', function(event){
  // listen for esc key
  if( (event.key && event.key == 27) || (event.key && event.key.toLowerCase() == 'escape' )) {
    // close navigation on mobile if open
    if(isOpen === true) {
      toggleMenu();
      setMenuState();
    }
  }
});

window.addEventListener('resize', () =>  setTimeout( function() {
  if(window.innerWidth > 768) {
    resetMenuState()
  } else {
    setMenuState()
  }
}, 500));

const toggleMenu = () => nav.classList.toggle("open")

const setMenuState = () => {
  isOpen = nav.classList.contains('open')
  navList.setAttribute("aria-expanded", isOpen)
  openTrigger.setAttribute("aria-hidden", isOpen)
  closeTrigger.setAttribute("aria-hidden", !isOpen)
}

const resetMenuState = () => {
  nav.classList.remove('open')
  navList.setAttribute("aria-expanded", false)
  openTrigger.setAttribute("aria-hidden", true)
  closeTrigger.setAttribute("aria-hidden", true)
}


