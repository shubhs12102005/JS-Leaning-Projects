const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const conpasswordError = document.getElementById('conpasswordError');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // If all validations are true then submit the form
    if (
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword()
    ) {
        alert("Successfully Submitted");

        // Reset form values
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("conpassword").value = "";

        // Clear icons
        [nameError, emailError, passwordError, conpasswordError].forEach(errorEl => {
            errorEl.previousElementSibling.classList.remove("fa-check", "fa-xmark");
        });
    }
});

// Name Validation
function validateName() {
    let name = document.getElementById('name').value;

    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Enter Full Name";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.remove("fa-xmark");
    nameError.previousElementSibling.classList.add("fa-check");
    return true;
}

// Email Validation
function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter valid Email";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.remove("fa-xmark");
    emailError.previousElementSibling.classList.add("fa-check");
    return true;
}

// Password Validation
function validatePassword() {
    let password = document.getElementById('password').value;

    if (password.length == 0) {
        passwordError.innerHTML = "Password is required";
        passwordError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/)) {
        passwordError.innerHTML = "include( [A-Z],[a-z],[0-9],@\,?, etc ).";
        passwordError.previousElementSibling.classList.add('fa-xmark'); // Add error icon
        return false;
    }

    passwordError.innerHTML = "";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}

// Confirm Password Validation
function validateConfirmPassword() {
    let password = document.getElementById('password').value;
    let conpassword = document.getElementById('conpassword').value;

    if (conpassword.length === 0) {
        conpasswordError.innerHTML = "Confirm Password is required";
        conpasswordError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    if (password !== conpassword) {
        conpasswordError.innerHTML = "Passwords do not match";
        conpasswordError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }

    conpasswordError.innerHTML = "";
    conpasswordError.previousElementSibling.classList.remove("fa-xmark");
    conpasswordError.previousElementSibling.classList.add("fa-check");
    return true;
}
