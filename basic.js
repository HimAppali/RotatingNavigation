"use strict";

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mainContent = document.querySelector(".main-content");
const mainNav = document.querySelector(".main-navigation");

menuIcon.addEventListener("click", function () {
  toggleIcons();
  translateNav();
});

closeIcon.addEventListener("click", function () {
  toggleIcons();
});

const toggleIcons = function () {
  closeIcon.classList.toggle("display-hide");
  menuIcon.classList.toggle("display-hide");
  mainContent.classList.toggle("transite-container");
  mainNav.classList.toggle("display-hide");
};

const translateNav = function () {
  const allLI = document.querySelectorAll(".main-navigation li");
  allLI.forEach(function (li) {
    li.style.transform = "translateX(0)";
    li.style.transitionDuration = "2s";
  });
};
