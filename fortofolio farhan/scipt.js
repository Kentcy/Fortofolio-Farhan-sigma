const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list ul");
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const title = document.querySelector(".title");
const text = "perkenalkan saya farhan";
let index = 0;
title.innerHTML = "";
function typingEffect() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 80);
    }
}
window.addEventListener("load", typingEffect);
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-container");
    if (window.scrollY > 20) {
        navbar.style.boxShadow =
            "0 5px 15px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }
});