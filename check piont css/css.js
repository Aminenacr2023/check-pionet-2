function control() {
    // Get references to the form elements
    var nameInput = document.getElementById("exampleInputName");
    var phoneInput = document.getElementById("exampleInputPhone");
    var passwordInput = document.getElementById("exampleInputPassword1");

    // Regular expressions for validation
    var nameRegex = /^[A-Za-z\s]+$/;
    var phoneRegex = /^\+\d{11}$/; // Adjust the regex as needed for your phone format
    var passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/; // Password with at least one digit, one lowercase and one uppercase letter, and at least 8 characters

    // Flags for validation
    var isNameValid = nameRegex.test(nameInput.value);
    var isPhoneValid = phoneRegex.test(phoneInput.value);
    var isPasswordValid = passwordRegex.test(passwordInput.value);

    // Display error messages
    if (!isNameValid) {
        alert("Please enter a valid name (letters and spaces only).");
        nameInput.focus();
        return false;
    }

    if (!isPhoneValid) {
        alert("Please enter a valid phone number in the format +21612345678.");
        phoneInput.focus();
        return false;
    }

    if (!isPasswordValid) {
        alert("Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 8 characters long.");
        passwordInput.focus();
        return false;
    }

    // If all fields are valid, the form will submit
    return true;
}