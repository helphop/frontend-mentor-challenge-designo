// get all of the input elements
//check each one if it is null or empty
//append the error html to that elements parent.

const form  = document.getElementsByTagName('form')[0];
const inputGroups = document.getElementsByClassName('form-control-group');
const submitButton = document.querySelector(".hero__form .btn--subtle");
const errorHTML = `<div class="form-field-error">
                    <p class="font-italic margin-right-xs" aria-live="polite">Can't be empty</p>
                    <img src="assets/images/contact/desktop/icon-error.svg" alt="exclamation point">
                  </div>`;

//validate each field when that field loses focus
form.addEventListener('focusout', (e) => validateInput(e.target.parentNode) )

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm(inputGroups);
})

const validateForm = (inputGroups) => {
  //loop through all form-control-groups
  Array.from(inputGroups).forEach((inputGroup) => {
    //validate each form-control-group
    validateInput(inputGroup)
  })
}

const validateInput = (inputGroup) => {
   //get the value of the input
   let inputValue = inputGroup.querySelector(".form-control").value;
   //get the form-field-error element if present
   let fieldError = inputGroup.querySelector(".form-field-error");

   //if the input is an empty string and there is no form-field-error element add one
   if (inputValue === "" && !fieldError) {
     inputGroup.insertAdjacentHTML('beforeend', errorHTML);
   }
   //if there is some input text and the form-field-error element is present remove it
   else if (inputValue !== "" && fieldError) {
    fieldError.remove();
   }
}
