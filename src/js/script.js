// Select the body or a larger container
const container = document.body; // or document.querySelector('.your-container');

// Header background appearing by scrolling
const header = document.querySelector('header');
const homeHeader = document.getElementById('homeHeader');

// Select the burger menu and the elements you want to show/hide
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const socialLinks = document.querySelector('.social-links');

// Create a new instance of Hammer on the container
const hammer = new Hammer(container);

// Function to open the menu
function openMenu() {
  navMenu.classList.add('show');
  socialLinks.classList.add('show');
  burgerMenu.classList.add('open');
}

// Function to close the menu
function closeMenu() {
  navMenu.classList.remove('show');
  socialLinks.classList.remove('show');
  burgerMenu.classList.remove('open');
}

// Event listener for click event
burgerMenu.addEventListener('click', function() {
  if (burgerMenu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Event listener for swipe events
hammer.on('swiperight', openMenu);
hammer.on('swipeleft', closeMenu);

// Event listener for click event on the document body
document.addEventListener('click', function(event) {
  // Check if the click was outside the burger menu and the menu is open
  if (!burgerMenu.contains(event.target) && burgerMenu.classList.contains('open')) {
    closeMenu();
  }
});

// Make headline id element disappear when scrolling down
document.onscroll = function () {
    const scrollPosition = window.scrollY;

    // Determine desired scroll threshold (e.g., 50px):
    const threshold = 50;

    if (scrollPosition > threshold) {
        header.style.backgroundColor = '#212529';
        homeHeader.style.backgroundColor = '#212529';
    } else {
        header.style.backgroundColor = 'black';
        homeHeader.style.backgroundColor = 'transparent';
    }
};

const isIndexPage = window.location.pathname === '/index.html';

if (isIndexPage) {
  let projectsSwiper = new Swiper('.projects-container', {
    slidesPerView: '3', // Adjust this value to control how many slides are visible at a time
    navigation: {
      prevEl: '.arrowLeftButton',
      nextEl: '.arrowRightButton',
      breakpoints: {
        // When the screen width is less than 768px
        800: {
            slidesPerView: 1,
            spaceBetween: 10,
            enabled: false, // Disable Swiper on small screens
        }
      },
    },
  });
  
  function checkScreenSize() {
    if (window.innerWidth <= 800) {
        if (projectsSwiper) {
          projectsSwiper.destroy(true, true); // Destroy the Swiper instance
          projectsSwiper = null;
        }
    } else {
        if (!projectsSwiper) {
          initSwiper(); // Initialize Swiper
        }
    }
  }
  
  // Initialize Swiper or destroy it based on the initial screen size
  checkScreenSize();
  
  // Add event listener to check screen size on resize
  window.addEventListener('resize', checkScreenSize);
}

// Update year in footer tag
const updateYear = new Date().getFullYear();
const copyrightElement = document.getElementById("copyright");

copyrightElement.innerHTML = "© 2023 - " + updateYear + " kanansnote. All rights reserved.";

// Scroll to Top

const topBtn = document.getElementById("topBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";  /* Show button when scrolled down */
  } else {
    topBtn.style.display = "none";   /* Hide button when scrolled up */
  }
}

topBtn.addEventListener("click", function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',  // Enables smooth scrolling animation
    block: 'start'       // Scrolls to the top of the page
  });
});