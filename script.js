//your JS code here. If required.
const search = document.querySelector(".search");
const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    search.classList.toggle("active"); // Toggle active class
    input.focus(); // Focus on input field
});
