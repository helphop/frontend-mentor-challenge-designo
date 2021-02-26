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
      // focusMenu = trigger; // move focus to menu trigger when menu is closed
      toggleMenu();
      setMenuState();
      openTrigger.focus();
    }
  }

  // listen for tab key
  if( (event.key && event.key== 9) || (event.key && event.key.toLowerCase() == 'tab' )) {
    // close navigation on mobile if open when nav loses focus
    if(trigger.getAttribute('aria-expanded') == 'true' && isVisible(trigger) ) trigger.click();
  }
});


const toggleMenu = () => nav.classList.toggle("open")
const setMenuState = () => isOpen = nav.classList.contains('open')