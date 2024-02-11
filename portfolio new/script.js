const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
});


document.addEventListener('DOMContentLoaded', function () {
const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('.navlist');

menuBtn.addEventListener('click', function () {
    navList.classList.toggle('active');
});
});
function scrollProjects(direction) {
    const portfolioContent = document.querySelector('.Portfolio-content');

    if (direction === 'left') {
        portfolioContent.scrollLeft -= 300; // Adjust the value based on your project width
    } else {
        portfolioContent.scrollLeft += 300; // Adjust the value based on your project width
    }
}


