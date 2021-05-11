"use strict";

// dom items
const phoneMenu = document.querySelector(".navigation__phone-menu");
const menuOpenIcon = document.querySelector(".navigation__hamburger");
const menuCloseIcon = document.querySelector(".navigation__close");
const navMenu = document.querySelector(".navigation__elements");

// MENU TOGGLE
phoneMenu.addEventListener("click", function () {
  menuOpenIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
  if (menuOpenIcon.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
  }
  if (!menuOpenIcon.classList.contains("hidden")) {
    navMenu.classList.add("hidden");
  }
});

// dropdown menus

navMenu.addEventListener("click", function (e) {
  e.preventDefault();
  const el = e.target.closest(".navigation__link");
  if (!el) return;
  const dropdown = el.nextElementSibling;
  el.classList.toggle("navigation__link--active");
  dropdown.classList.toggle("navigation__dropdown--active");
});
