function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");

    // Resetting error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    var isValid = true;

    // Name validation
    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.innerHTML = "Invalid email format";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.innerHTML = "Message is required";
        isValid = false;
    }

    return isValid;
}
