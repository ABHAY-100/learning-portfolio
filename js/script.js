// Wait for the DOM to be fully loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const menuList = document.getElementById("menuList");

  // Initialize menu as closed
  menuList.style.display = "none"; // Hide the menu list
  menuIcon.style.backgroundColor = "transparent"; // Set the menu icon background color to transparent

  // Toggle menu display on menu icon click
  menuIcon.addEventListener("click", () => {
    if (menuList.style.display === "none") {
      // If menu is closed, display it and change the background color
      menuList.style.display = "flex";
      menuIcon.style.backgroundColor = "rgba(89, 85, 84, 0.1)";
    } else {
      // If menu is open, hide it and reset the background color
      menuList.style.display = "none";
      menuIcon.style.backgroundColor = "transparent";
    }
  });

  // Close menu on outside click
  document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
      // If the click is outside the menu icon and menu list, close the menu
      menuList.style.display = "none";
      menuIcon.style.backgroundColor = "transparent";
    }
  });

  // Close menu on menu link click
  const menuLinks = menuList.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // When a menu link is clicked, close the menu
      menuList.style.display = "none";
      menuIcon.style.backgroundColor = "transparent";
    });
  });

  // Form submission Reset handling
  const contactForm = document.getElementById("contact-form");
  contactForm.reset();
});