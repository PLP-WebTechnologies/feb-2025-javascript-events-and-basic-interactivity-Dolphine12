// 1. Button click event handling
document.getElementById("changeTextBtn").addEventListener("click", function() {
  this.textContent = "You clicked me! 🎉";
  this.style.backgroundColor = "red";  // Change button color
});

// 2. Hover effect
document.getElementById("hoverBox").addEventListener("mouseover", function() {
  this.style.backgroundColor = "lightgreen";
});
document.getElementById("hoverBox").addEventListener("mouseout", function() {
  this.style.backgroundColor = "lightblue";
});

// 3. Keypress detection
document.addEventListener("keydown", function(event) {
  document.getElementById("keyPressOutput").textContent = `You pressed: ${event.key}`;
});

// 4. Secret action for double-click or long press
const secretElement = document.getElementById("secretAction");
let pressTimer;
secretElement.addEventListener("dblclick", function() {
  alert("Double-clicked! Surprise! 🎉");
});

secretElement.addEventListener("mousedown", function() {
  pressTimer = setTimeout(function() {
    alert("Long press detected! 🤫");
  }, 1000); // Trigger long press after 1 second
});

secretElement.addEventListener("mouseup", function() {
  clearTimeout(pressTimer);
});

// 5. Image gallery - Hover effect
document.querySelectorAll("#imageGallery img").forEach(img => {
  img.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.2)";
  });
  img.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
  });
});

// 6. Accordion-style content
const accordionBtns = document.querySelectorAll(".accordionBtn");
accordionBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// 7. Form validation (email, password, and name)
document.getElementById("myForm").addEventListener("submit", function(event) {
  let valid = true;

  // Email validation (simple)
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!email.value || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (min 8 characters)
  const password = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Name field required
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (!name.value) {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // If any validation fails, prevent form submission
  if (!valid) {
    event.preventDefault();
  }
});
