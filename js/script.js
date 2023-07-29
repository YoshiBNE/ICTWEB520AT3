function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
};


document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const hamLinks = document.querySelectorAll(".navbar li");
  
  console.log(hamLinks);
  
  hamburger.addEventListener("click", () => {
    // hamburger.classList.toggle("nav-active");
    nav.classList.toggle("nav-active");
  });
})

