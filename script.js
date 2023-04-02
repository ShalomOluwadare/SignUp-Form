const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const error = document.getElementById("error-message");
const createAccount = document.querySelector(".createAccount");

createAccount.addEventListener("click", () => {
  if (password.value === confirmPassword.value) {
    error.textContent = "";
  } else {
    error.textContent += "Passwords do not match";
  }
});
