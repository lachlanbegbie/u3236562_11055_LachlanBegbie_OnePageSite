// Working
// Sliding panels

let mySections = document.querySelectorAll("section2");

let scrollPosition = 0;

window.addEventListener("scroll", function(){
    scrollPosition = window.scrollY;
    console.log(scrollPosition)
});