const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const phoneNumber = document.querySelector('#phone')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')


const togglePassword1 = document.querySelector('#togglePassword1')
const togglePassword2 = document.querySelector('#togglePassword2')


function togglePasswordVisibility(inputField, toggleButton) {
    if(inputField.type === 'password'){
        inputField.type = 'text';
        toggleButton.textContent = 'Hide';
    }else {
        inputField.type = 'password'
        toggleButton.textContent = 'Show';
        
    }
}

togglePassword1.addEventListener('click',() => togglePasswordVisibility(password,togglePassword1))
togglePassword2.addEventListener('click',() => togglePasswordVisibility(confirmPassword,togglePassword2))

function validateName(){

    const namePattern = /^[A-Za-z]+$/;

    if(!namePattern.test(firstName.value)){
        firstName.setCustomValidity('It should only contain letters')
        return false;
    }

    if(!namePattern.test(lastName.value)){
        lastName.setCustomValidity('It should only contain letters')
        return false;
    }
    return true;
}


function validatePasswordMatch(){
    if(password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity('Passwords do not match')
    }else{
        confirmPassword.setCustomValidity("");
    }
}

password.addEventListener('input',validatePasswordMatch);
confirmPassword.addEventListener('input',validatePasswordMatch)

const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    if(!validateName()){
        e.preventDefault();
    }

    validatePasswordMatch();
    if(confirmPassword.validity.customError){
        e.preventDefault();
    }
})