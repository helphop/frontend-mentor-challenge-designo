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