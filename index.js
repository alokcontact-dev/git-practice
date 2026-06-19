document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const yearElement = document.getElementById("year");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      siteNav.classList.toggle("open");
      const expanded = siteNav.classList.contains("open");
      navToggle.setAttribute("aria-expanded", expanded);
    });
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thanks for your message! This demo site does not send email yet.");
      contactForm.reset();
    });
  }
});
