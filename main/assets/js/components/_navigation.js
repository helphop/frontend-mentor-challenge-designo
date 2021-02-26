  const nav = document.querySelector(".header .nav")


  nav.addEventListener('click', (e) => toggleMenu())

  // listen for key events
  window.addEventListener('keyup', function(event){
    // listen for esc key
    if( (event.key && event.key == 27) || (event.key && event.key.toLowerCase() == 'escape' )) {
      // close navigation on mobile if open
      if(nav.classList.contains("open")) {
        // focusMenu = trigger; // move focus to menu trigger when menu is closed
        nav.classList.toggle('open');
      }
    }


    // listen for tab key
    // if( (event.key && event.key== 9) || (event.key && event.key.toLowerCase() == 'tab' )) {
    //   // close navigation on mobile if open when nav loses focus
    //   if(trigger.getAttribute('aria-expanded') == 'true' && isVisible(trigger) && !document.activeElement.closest('.js-header')) trigger.click();
    // }
  });


    const toggleMenu = () => {
      nav.classList.toggle("open");
    }
