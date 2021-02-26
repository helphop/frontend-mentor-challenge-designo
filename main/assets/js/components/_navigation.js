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

const toggleMenu = () => nav.classList.toggle("open")
const setMenuState = () => {
  isOpen = nav.classList.contains('open')
  navList.setAttribute("aria-expanded", isOpen)
}