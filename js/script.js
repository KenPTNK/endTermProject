// Get the button
const backToTopButton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block"; // Show the button
  } else {
    backToTopButton.style.display = "none"; // Hide the button
  }
};

// When the user clicks the button, scroll to the top
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll to the top
  });
};

// Function to show the information //
function showInfo() {
  document.querySelector('.info').style.display = 'block';
}

// Function to hide the information
function hideInfo() {
  document.querySelector('.info').style.display = 'none';
}