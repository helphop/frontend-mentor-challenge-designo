
const form  = document.getElementsByTagName('form')[0];
const inputGroups = document.getElementsByClassName('form-control-group');
const submitButton = document.querySelector(".hero__form .btn--subtle");

if (form) {
  //validate each field when that field loses focus
  form.addEventListener('focusout', (e) => validateInput(e.target.parentNode) )
  //validate each field when the form is submitted
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    validateForm(inputGroups);
  })
}

const validateForm = (inputGroups) => {
  //loop through all form-control-groups
  Array.from(inputGroups).forEach((inputGroup) => {
    //validate each form-control-group
    validateInput(inputGroup)
  })
}

const validateInput = (inputGroup) => {

   let inputField = inputGroup.querySelector(".form-control");
   //get the value of the input
   let inputValue = inputField.value;
   //get the form-field-error element if present
   let fieldError = inputGroup.querySelector(".form-field-error");

   //if the input is an empty string and there is no form-field-error element add one
   if (inputValue === "" && !fieldError) {
     inputGroup.insertAdjacentHTML('beforeend', formatErrorMessage());
   } else if (inputValue !== "") {
     //if an error message is present remove it
    if (fieldError) fieldError.remove()
    //Check if the field has a value and if it is an email field validate the email address
    if (inputField.type === "email" && inputField.validity.typeMismatch) inputGroup.insertAdjacentHTML('beforeend', formatErrorMessage(inputField.type));
   }
}

function formatErrorMessage(type = "standard") {
  //check type
  let message = type === "email" ? "Please use a valid email address" : "Can't be empty";
  //return the string
  return `<div class="form-field-error">
                    <p class="font-italic margin-right-xs" aria-live="polite">${message}</p>
                    <img src="assets/images/contact/desktop/icon-error.svg" alt="exclamation point">
                  </div>`;
}

if (document.querySelector(".location")) {
  //Toronto Map
	const coordinatesToronto = [43.64478, -79.39458];
	const mapToronto = L.map('mapToronto').setView(coordinatesToronto, 15);
	createMapTile(mapToronto);
	const markerToronto = L.marker(coordinatesToronto).addTo(mapToronto);


	//New South Wales Map
	const coordinatesNewSouthWales = [-30.330119821488733, 149.78873043547893]
	const mapNewSouthWales = L.map('mapNewSouthWales').setView(coordinatesNewSouthWales, 15);
	createMapTile(mapNewSouthWales);
	const markerNewSouthWales = L.marker(coordinatesNewSouthWales).addTo(mapNewSouthWales);


	//Rhyd-y-fro Map
	coordinatesRhydyfro = [51.73220196706227, -3.8620045106800496]
	const mapRhydyfro = L.map('mapRhydyfro').setView(coordinatesRhydyfro, 15);
	createMapTile(mapRhydyfro);
	const markerRhydyfro  = L.marker(coordinatesRhydyfro).addTo(mapRhydyfro);


	//Setup how the user interacts with the map
	setMapControl(mapToronto);
	setMapControl(mapNewSouthWales);
	setMapControl(mapRhydyfro);

	//creates the map for the given map object
	function createMapTile(mapName) {
			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: 'pk.eyJ1IjoiY2hlbGxnb3VkYSIsImEiOiJja21mMTY4bTgwNGRuMnZrMXNwY28xZ2Z3In0.1uuZ2XwLqDfH0YvDat9Wqw'
		}).addTo(mapName);
	}

	//disable scroll zoom until user clicks on map
	function setMapControl(mapName){
			mapName.scrollWheelZoom.disable();
			mapName.on('focus', () => { mapName.scrollWheelZoom.enable(); });
			mapName.on('blur', () => { mapName.scrollWheelZoom.disable(); });
	}
}
const nav = document.querySelector(".nav-bar .nav")
const openTrigger = nav.querySelector(".nav__icon--open")
const closeTrigger = nav.querySelector(".nav__icon--close")
const navList = document.querySelector(".nav__list")
let isOpen = false;

nav.addEventListener('click', (e) => {
  //only open menu if on mobile sized device
  if (onMobile()) {
    toggleMenu()
    setMenuState();
  }
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

const onMobile = () => window.innerWidth < 768;

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


