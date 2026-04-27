"use strict";

/* ::::::::::::::::::::
:: GLobal Javascript ::
::::::::::::::::::::::: */

// Loader JS
window.addEventListener("load", function () {
  var loader = document.querySelector(".fullpage_loader");
  if (loader) {
    loader.style.transition = "opacity 1s ease";
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.remove(); // Show the content after loader
    }, 1000); // Matches the "slow" fadeOut time (500ms)
  }
});

// ==== Sticky Menu ====
window.addEventListener("scroll", function () {
  let header = document.querySelector(".site-header");
  header.classList.toggle("scrolling", window.scrollY > 0);
});

// ::::: GLobal Javascript ::::
// ================================Animate Interaction on Scroll ==================================
JOS.init({
  // disable: false, // Disable JOS gloabaly | Values :  'true', 'false'
  // debugMode: true, // Enable JOS debug mode | Values :  'true', 'false'
  passive: false, // Set the passive option for the scroll event listener | Values :  'true', 'false'

  once: true, // Disable JOS after first animation | Values :  'true', 'false' || Int : 0-1000
  animation: "fade-up", // JOS global animation type | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  // animationInverse: "static", // Set the animation type for the element when it is scrolled out of view | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  timingFunction: "ease", // JOS global timing function | Values :  'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'steps()', 'cubic-bezier()', 'my-custom-timing-function'
  //mirror : false, // Set whether the element should animate back when scrolled out of view | Values :  'true', 'false'
  threshold: 0, // Set gloabal the threshold for the element to be visible | Values :  0-1
  delay: 0.3, // Set global the delay for the animation to start | Values :  0,1,2,3,4,5
  duration: 0.5, // Set global the duration for the animation playback | Values :  flota : 0-1 & int : 0,1,2,3,4,5

  // startVisible: "true", // Set whether the element should animate when the page is loaded | Values :  'true', 'false' || MS : 0-10000
  scrollDirection: "down", // Set the scroll direction for the element to be visible | Values :  'up', 'down', 'none'
  //scrollProgressDisable: true // disable or enable scroll callback function | Values :  'true', 'false'
  // intersectionRatio: 0.4, // Set the intersection ratio between which the element should be visible | Values :  0-1 (automaticaly set)
  // rootMargin_top: "0%", // Set by which percent the element should animate out (Recommended value between 10% to -30%)
  // rootMargin_bottom: "-50%", // Set by which percent the element should animate out (Recommended value between -10% to -60%)
  rootMargin: "0% 0% 5% 0%", // Set the root margin for the element to be visible | Values :  _% _% _% _%  (automaticaly set)
});
// ==== Tab Menu ====
// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listeners to tab buttons
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all tab buttons and hide all tab content
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    tabContents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Get the data-tab attribute of the clicked button
    const tabId = button.getAttribute("data-tab");
    const correspondingTab = document.getElementById(tabId);

    // Add 'active' class to the clicked button and show the corresponding tab content
    button.classList.add("active");
    correspondingTab.classList.remove("hidden");
  });
});

// ======================================== Accordion ======================================
let accordions = document.querySelectorAll(".accordion-item");
accordions.forEach((item) => {
  let label = item.querySelector(".accordion-header");
  label.addEventListener("click", () => {
    accordions.forEach((accordionItem) => {
      accordionItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

//=========== Progress Bar =============
// Find the element with the class 'progress-bar'
const progressBars = document.querySelectorAll(".progress-bar");

// Iterate over each progress bar element
progressBars.forEach((progressBar) => {
  // Get the value of the 'data-percentage-value' attribute for each progress bar
  const percentageValue = progressBar.getAttribute("data-percentage-value");
  progressBar.style.width = percentageValue + "%";
});

//=========== Pricing Button =============
function toggleSwitch() {
  var month = document.querySelectorAll(".month");
  var annual = document.querySelectorAll(".annual");
  for (var i = 0; i < month.length; i++) {
    if (document.getElementById("toggle").checked == true) {
      month[i].classList.add("hidden");
      annual[i].classList.remove("hidden");
    } else {
      month[i].classList.remove("hidden");
      annual[i].classList.add("hidden");
    }
  }
}

// =========== Show Image On Hover =============
function showImage(event) {
  const hoverOnItem = event.currentTarget;
  const hoverOnImage = hoverOnItem.querySelector(".hover-on-image");
  const hoveredImage = document.getElementById("hoveredImage");

  // Set the hovered image source to the hoverOn image source
  hoveredImage.src = hoverOnImage.src;

  // Show the hovered image
  hoveredImage.style.display = "block";

  // Move the hovered image with the cursor
  document.addEventListener("mousemove", moveImage);

  function moveImage(event) {
    const x = event.clientX;
    const y = event.clientY;

    hoveredImage.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Hide the hovered image when mouse leaves the hoverOn item
  hoverOnItem.onmouseleave = () => {
    hoveredImage.style.display = "none";
    document.removeEventListener("mousemove", moveImage);
  };
}

// =========== Search =============
const searchBlock = document.getElementById("search-block");
const infoMenuBlock = document.getElementById("info-menu-block");
const overlayBlock = document.querySelector(".overlay-block");
const btnOpenSearch = () => {
  searchBlock.style.transform = "translateY(0%)";
  overlayBlock.classList.remove("hidden");
};

const btnCloseSearch = () => {
  searchBlock.style.transform = "translateY(-100%)";
  overlayBlock.classList.add("hidden");
};

// =========== Info Offcanvas Menu =============
const btnOpenInfoMenu = () => {
  infoMenuBlock.style.transform = "translateX(0%)";
  overlayBlock.classList.remove("hidden");
};

const btnCloseInfoMenu = () => {
  infoMenuBlock.style.transform = "translateX(100%)";
  overlayBlock.classList.add("hidden");
};

// =========== Overlay Menu =============
const closeUserEvent = () => {
  searchBlock.style.transform = "translateY(-100%)";
  infoMenuBlock.style.transform = "translateX(100%)";
  overlayBlock.classList.add("hidden");
};

// =========== Increment Decrement  =============
const productValueElem = document.querySelector(".product-value");
let value = 0;
const btnIncrement = () => {
  value++;
  productValueElem.textContent = value;
};
const btnDecrement = () => {
  if (value > 0) {
    value--;
    productValueElem.textContent = value;
  }
};

// =========== Dynamic Year =============
const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("copyright-year");
copyrightYear.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function () {
  const removeButtons = document.querySelectorAll(".btn-remove-product");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productRow = button.closest("tr");
      if (productRow) {
        productRow.remove();
      }
    });
  });
});

/* ::::::::::::::::::::::
:: Template Javascript ::
::::::::::::::::::::::::: */

// =========== Service Slider - 1 =============
const serviceSliderOne = new Swiper(".service-slider-one", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// =========== Service Slider - 2 =============
const serviceSliderTwo = new Swiper(".service-slider-two", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// =========== Project Slider - 1 =============
const portfolioSliderOne = new Swiper(".portfolio-slider-one", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// =========== Project Slider - 2 =============
const portfolioSliderTwo = new Swiper(".portfolio-slider-two", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// =========== Hero Slider - 1 =============
const heroSliderOne = new Swiper(".hero-slider-one", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hero-button-next",
    prevEl: ".hero-button-prev",
  },
});

// =========== Testimonial Slider - 2 =============
const testimonialSliderOne = new Swiper(".testimonial-slider-one", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
});

// =========== Client Logo Slider =============
const clientSlider = new Swiper(".client-slider", {
  slidesPerView: 1,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// =========== Project Slider - 1 =============
const teamSliderOne = new Swiper(".team-slider-one", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
  // If we need pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

// Product Gallery
var productThumb = new Swiper(".product-thumbs", {
  slidesPerView: 3,
  breakpoints: {
    576: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  clickable: true,
  // direction: "vertical",
  spaceBetween: 16,
});
var productGallery = new Swiper(".product-gallery", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".testimonial-slider-button-next",
    prevEl: ".testimonial-slider-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});
