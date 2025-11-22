// script.js

// Scroll reveal for sections
const sections = document.querySelectorAll('.section');

const revealSection = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
