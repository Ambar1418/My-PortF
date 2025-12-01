"use strict";
import form from "./form.js";
import skillbar from "./skillbar.js";

// Circular Menu Functionality
function initCircularMenu() {
  const menuButton = document.querySelector(".menu-button");
  const menuItems = document.querySelector(".menu-items");

  if (!menuButton || !menuItems) return;

  // Toggle menu on button click
  const toggleMenu = (e) => {
    e.stopPropagation();
    menuButton.classList.toggle("active");
    menuItems.classList.toggle("active");
  };

  menuButton.addEventListener("click", toggleMenu);

  // Close menu when clicking outside
  const closeMenu = (e) => {
    if (!menuButton.contains(e.target) && !menuItems.contains(e.target)) {
      menuButton.classList.remove("active");
      menuItems.classList.remove("active");
    }
  };

  document.addEventListener("click", closeMenu);

  // Prevent clicks inside menu from closing it
  menuItems.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Close menu after clicking a menu item
  const menuItemLinks = document.querySelectorAll(".menu-item");
  menuItemLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        menuButton.classList.remove("active");
        menuItems.classList.remove("active");
      }, 300); // Small delay for smooth transition
    });
  });

  // Close menu when scrolling
  window.addEventListener("scroll", () => {
    if (menuButton.classList.contains("active")) {
      menuButton.classList.remove("active");
      menuItems.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
  });
  form();
  skillbar();
  initCircularMenu();

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");
  // Hamburger menu (only if toggle button exists)
  if (navBtn) {
    navBtn.onclick = () => {
      if (nav.classList.toggle("open")) {
        if (navBtnImg) navBtnImg.src = "img/icons/close.svg";
      } else {
        if (navBtnImg) navBtnImg.src = "img/icons/open.svg";
      }
    };
  }

  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    let triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
});
