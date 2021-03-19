const form=document.getElementsByTagName("form")[0],inputGroups=document.getElementsByClassName("form-control-group"),submitButton=document.querySelector(".hero__form .btn--subtle");form&&(form.addEventListener("focusout",e=>validateInput(e.target.parentNode)),submitButton.addEventListener("click",e=>{e.preventDefault(),validateForm(inputGroups)}));const validateForm=e=>{Array.from(e).forEach(e=>{validateInput(e)})},validateInput=e=>{var t=e.querySelector(".form-control"),o=t.value;let a=e.querySelector(".form-field-error");""!==o||a?""!==o&&(a&&a.remove(),"email"===t.type&&t.validity.typeMismatch&&e.insertAdjacentHTML("beforeend",formatErrorMessage(t.type))):e.insertAdjacentHTML("beforeend",formatErrorMessage())};function formatErrorMessage(e="standard"){return`<div class="form-field-error">
                    <p class="font-italic margin-right-xs" aria-live="polite">${"email"===e?"Please use a valid email address":"Can't be empty"}</p>
                    <img src="assets/images/contact/desktop/icon-error.svg" alt="exclamation point">
                  </div>`}if(document.querySelector(".location")){const k=[43.64478,-79.39458],l=L.map("mapToronto").setView(k,15);createMapTile(l);const m=L.marker(k).addTo(l),n=[-30.330119821488733,149.78873043547893],o=L.map("mapNewSouthWales").setView(n,15);createMapTile(o);const p=L.marker(n).addTo(o);coordinatesRhydyfro=[51.73220196706227,-3.8620045106800496];const q=L.map("mapRhydyfro").setView(coordinatesRhydyfro,15);createMapTile(q);const r=L.marker(coordinatesRhydyfro).addTo(q);function createMapTile(e){L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiY2hlbGxnb3VkYSIsImEiOiJja21mMTY4bTgwNGRuMnZrMXNwY28xZ2Z3In0.1uuZ2XwLqDfH0YvDat9Wqw"}).addTo(e)}function setMapControl(e){e.scrollWheelZoom.disable(),e.on("focus",()=>{e.scrollWheelZoom.enable()}),e.on("blur",()=>{e.scrollWheelZoom.disable()})}setMapControl(l),setMapControl(o),setMapControl(q)}const nav=document.querySelector(".nav-bar .nav"),openTrigger=nav.querySelector(".nav__icon--open"),closeTrigger=nav.querySelector(".nav__icon--close"),navList=document.querySelector(".nav__list");let isOpen=!1;nav.addEventListener("click",e=>{onMobile()&&(toggleMenu(),setMenuState())}),window.addEventListener("keyup",function(e){(e.key&&27==e.key||e.key&&"escape"==e.key.toLowerCase())&&!0===isOpen&&(toggleMenu(),setMenuState())}),window.addEventListener("resize",()=>setTimeout(function(){(768<window.innerWidth?resetMenuState:setMenuState)()},500));const onMobile=()=>window.innerWidth<768,toggleMenu=()=>nav.classList.toggle("open"),setMenuState=()=>{isOpen=nav.classList.contains("open"),navList.setAttribute("aria-expanded",isOpen),openTrigger.setAttribute("aria-hidden",isOpen),closeTrigger.setAttribute("aria-hidden",!isOpen)},resetMenuState=()=>{nav.classList.remove("open"),navList.setAttribute("aria-expanded",!1),openTrigger.setAttribute("aria-hidden",!0),closeTrigger.setAttribute("aria-hidden",!0)};