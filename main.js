const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const phoneNumber = document.querySelector('#phone')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')


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