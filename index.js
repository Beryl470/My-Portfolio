const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  responseMessage.style.display = "block";

  
  contactForm.reset();

  setTimeout(() => {
    responseMessage.style.display = "none";
  }, 3000);
});

