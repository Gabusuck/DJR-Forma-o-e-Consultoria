// Sticky Navigation
window.addEventListener('scroll', function() {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.mvv-card, .service-card, .contact-box, .rvcc-content, .rvcc-process, .faq-item, .step');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial state for scroll reveal
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run once on load

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        
        // Close other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle Icon
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fas', 'fa-bars');
            icon.classList.add('fas', 'fa-times');
        } else {
            icon.classList.remove('fas', 'fa-times');
            icon.classList.add('fas', 'fa-bars');
        }
    });
}

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fas', 'fa-times');
        icon.classList.add('fas', 'fa-bars');
    });
});
