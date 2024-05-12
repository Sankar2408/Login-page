document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (password.length < 8) {
    showMessage("Password must be at least 8 characters long.");
  } else if (!/[A-Z]/.test(password)) {
    showMessage("Password must contain at least one capital letter.");
  } else if (!/[^a-zA-Z0-9]/.test(password)) {
    showMessage("Password must contain at least one special character.");
  } else {
    showMessage("Login successful!");
  }
});

function showMessage(message) {
  document.getElementById("message").textContent = message;
}
