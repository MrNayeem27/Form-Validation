const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    let isFormValid = true;


    if (usernameValue === '') {
        setError(username, 'Username is required');
        isFormValid = false;
    } else {
        setSuccess(username);
    }


    if (emailValue === '') {
        setError(email, 'Email is required');
        isFormValid = false;
    } else if (!validateEmail(emailValue)) {
        setError(email, 'Please provide a valid email address');
        isFormValid = false;
    } else {
        setSuccess(email);
    }


    if (passwordValue === '') {
        setError(password, 'Password cannot be blank');
        isFormValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
        isFormValid = false;
    } else {
        setSuccess(password);
    }


    if (cpasswordValue === '') {
        setError(cpassword, 'Enter your password again');
        isFormValid = false;
    } else if (cpasswordValue !== passwordValue) {
        setError(cpassword, 'Passwords do not match');
        isFormValid = false;
    } else if (passwordValue !== '' && passwordValue.length >= 8) {
        setSuccess(cpassword);
    } else {
        setError(cpassword, 'Passwords do not match'); 
        isFormValid = false;
    }

    if (isFormValid) {
        console.log('Form is valid and ready to submit!');
        alert('Registration Successful!');
    }
}

function setError(input, message) {
    const inputGroup = input.parentElement;
    const errorElement = inputGroup.nextElementSibling;

    if (errorElement && errorElement.classList.contains('error')) {
        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    } else {
        console.error("Could not find the .error element sibling for:", input);
    }
}

function setSuccess(input) {
    const inputGroup = input.parentElement;
    const errorElement = inputGroup.nextElementSibling;

    if (errorElement && errorElement.classList.contains('error')) {
        errorElement.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    } else {
        console.error("Could not find the .error element sibling for:", input);
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};