document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-box");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("con-password");
  const termsCheckbox = document.querySelector('.terms input[type="checkbox"]');
  const registerBtn = document.querySelector(".btn");

  // Function to validate password
  function validatePassword(password) {
    // Password should be at least 12 characters
    if (password.length < 12) return false;

    // Password should contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) return false;

    // Password should contain at least one lowercase letter
    if (!/[a-z]/.test(password)) return false;

    // Password should contain at least one special character
    if (!/[\W_]/.test(password)) return false;

    return true;
  }

  // Function to check if terms checkbox is checked
  function isTermsChecked() {
    return termsCheckbox.checked;
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if terms are checked
    if (!isTermsChecked()) {
      alert("Please agree to the terms & conditions.");
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      alert(
        "Password should be at least 12 characters long and contain at least one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // If all checks pass, submit the form
    form.submit();
  }

  // Event listener for form submission
  registerBtn.addEventListener("click", handleSubmit);
});
