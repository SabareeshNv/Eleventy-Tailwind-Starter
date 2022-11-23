// To show navbar on mobile view - Top Slide Down (traditional)
const navbarToggle = () => {
  document.getElementById("toggle").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("hidden");
  });
};


//Using onClick handler. No need to listen to event
// Mobile & Tablet slide over style menu
function toggleSlideOver() {
  document.getElementById('slideover-container').classList.toggle('invisible');
  document.getElementById('slideover-bg').classList.toggle('opacity-0');
  document.getElementById('slideover-bg').classList.toggle('opacity-50');
  document.getElementById('slideover').classList.toggle('translate-x-full');
}

// Used so we can add more than one function in this same js script
const app = () => {
  // navbarToggle();
};

app();
