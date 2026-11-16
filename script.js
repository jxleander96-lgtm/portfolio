"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  navLinks.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const contactForm = document.querySelector("#contact-form");
const formNotice = document.querySelector("#form-notice");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNotice.textContent = "Thanks for your message. This demo form is not connected and did not send anything. Connect a form service or backend to receive submissions.";
  formNotice.classList.add("form-feedback");
});
