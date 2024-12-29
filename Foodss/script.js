// Toggle the navigation menu for smaller screens
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }
  
  // Form submission handling
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page
  
    // Simulate form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      document.getElementById("form-status").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("form-status").classList.add("hidden");
        document.getElementById("contact-form").reset();
      }, 3000);
    }
  });
  