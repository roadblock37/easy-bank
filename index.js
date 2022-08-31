// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.getElementById("nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
    console.log("hamburger clicked")
links.classList.toggle("show-links");
});