// To show navbar on mobile view - Top Slide Down (traditional)
const navbarToggle = () => {
  document.getElementById("toggle").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("hidden");
  });
};

// Used so we can add more than one function in this same js script
const app = () => {
  navbarToggle();
};

app();
