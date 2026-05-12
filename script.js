// Typed.js
new Typed("#typed", {
  strings: ["Web Developer", "Web Designer", "Full-Stack Enthusiast"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

// AOS Init
AOS.init({
  duration: 1200,
  once: true
});

document.querySelector(".contact-modern").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Message sent successfully! I’ll reply to you soon.");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("responseMessage");

  if (!name || !email || !message) {
    response.textContent = "Please fill out all fields.";
    return;
  }

  response.textContent = "Message sent successfully!";
  this.reset();
});

