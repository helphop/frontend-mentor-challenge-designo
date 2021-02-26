  const nav = document.querySelector(".nav")
  console.log(nav);
  nav.addEventListener('click', (e) => {
    nav.classList.toggle("open");
    // e.currentTarget.classList.toggle(".open");
  })
  // // listen for key events
  // window.addEventListener('keyup', function(event){
  //   // listen for esc key
  //   if( (event.keyCode && event.keyCode == 27) || (event.key && event.key.toLowerCase() == 'escape' )) {
  //     // close navigation on mobile if open
  //     if(trigger.getAttribute('aria-expanded') == 'true' && isVisible(trigger)) {
  //       focusMenu = trigger; // move focus to menu trigger when menu is close
  //       trigger.click();
  //     }
  //   }
  //   // listen for tab key
  //   if( (event.keyCode && event.keyCode == 9) || (event.key && event.key.toLowerCase() == 'tab' )) {
  //     // close navigation on mobile if open when nav loses focus
  //     if(trigger.getAttribute('aria-expanded') == 'true' && isVisible(trigger) && !document.activeElement.closest('.js-header')) trigger.click();
  //   }
  // });



