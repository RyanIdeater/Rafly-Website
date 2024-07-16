/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") === "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", () => {
  if (localStorage.getItem("mode") === "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
const developer = document.querySelectorAll(".developer");
const uiux = document.querySelectorAll(".uiux");
const graphic = document.querySelectorAll(".graphic");

// Function to set initial position and width of the indicator
function setInitialIndicator(tab) {
  indicator.style.width = tab.getBoundingClientRect().width + "px";
  indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";
}

// Function to show tab content based on tab clicked
function showTabContent(tabval) {
  // Hide all categories initially
  developer.forEach((item) => {
    item.style.display = "none";
  });
  uiux.forEach((item) => {
    item.style.display = "none";
  });
  graphic.forEach((item) => {
    item.style.display = "none";
  });

  // Show the selected category
  if (tabval === "developer") {
    developer.forEach((item) => {
      item.style.display = "block";
    });
  } else if (tabval === "uiux") {
    uiux.forEach((item) => {
      item.style.display = "block";
    });
  } else if (tabval === "graphic") {
    graphic.forEach((item) => {
      item.style.display = "block";
    });
  }
}

// Set initial state on page load
setInitialIndicator(tabs[0]); // Set initial indicator position and width for the first tab
showTabContent(tabs[0].getAttribute("data-tabs")); // Show initial tab content

// Add click event listeners to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Adjust indicator width and position on tab click
    indicator.style.width = tab.getBoundingClientRect().width + "px";
    indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

    // Remove active class from all tabs and add to clicked tab
    tabs.forEach((t) => t.classList.remove("text-whiteColor"));
    tab.classList.add("text-whiteColor");

    // Get data-tabs attribute value
    const tabval = tab.getAttribute("data-tabs");

    // Show corresponding tab content
    showTabContent(tabval);
  });
});

const scrollHeader = () => {
  const navbar = document.getElementById("navbar");
  const aTags = document.querySelectorAll("nav ul li a");
  const themeToggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");
  const logo = document.getElementById("logo");
  const whiteLogo = document.getElementById("white-logo");

  if (window.scrollY >= 200) {
    navbar.classList.add("bg-primaryColor");
    aTags.forEach((item) => {
      item.classList.add("text-whiteColor");
    });
    themeToggle.classList.add("text-whiteColor");
    hamburger.classList.add("text-whiteColor");

    // Show white logo and hide colored logo
    logo.style.display = "none";
    whiteLogo.style.display = "block";
  } else {
    navbar.classList.remove("bg-primaryColor");
    aTags.forEach((item) => {
      item.classList.remove("text-whiteColor");
    });
    themeToggle.classList.remove("text-whiteColor");
    hamburger.classList.remove("text-whiteColor");

    // Show colored logo and hide white logo
    logo.style.display = "block";
    whiteLogo.style.display = "none";
  }
};

// Call scrollHeader function on initial load and on scroll events

// Call the scrollHeader function on initial load and on scroll events
window.addEventListener("scroll", scrollHeader);

window.addEventListener("scroll", scrollHeader);

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (window.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "hero";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLink.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".hero__image");
sr.reveal(".hero__content", { origin: "bottom" });
sr.reveal(".hero__footer", { origin: "bottom", delay: 1200 });

sr.reveal(".service__top", { origin: "bottom" });
sr.reveal(".service__item", { origin: "bottom", interval: 300 });

sr.reveal(".recent_works_top", { origin: "bottom" });
sr.reveal(".recent_works_tabs", { origin: "bottom", delay: 800 });
sr.reveal(".work__card", { origin: "bottom", delay: 1200 });

sr.reveal(".exp_top", { origin: "top" });
sr.reveal(".exp_card", { origin: "left", interval: 300 });

sr.reveal(".edu_top", { origin: "top" });
sr.reveal(".edu_card", { origin: "left", interval: 300 });

sr.reveal(".skills_top", { origin: "top" });
sr.reveal(".skills_card", { origin: "left", interval: 300 });

sr.reveal(".certif_top", { origin: "top" });
sr.reveal(".certif_card", { origin: "left", interval: 300 });

sr.reveal(".contact_form", { origin: "top" });
sr.reveal(".contact_item", { origin: "left", interval: 300 });
