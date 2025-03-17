// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    lerp: 0.05
});

// Update ScrollTrigger when Locomotive Scroll updates
scroll.on('scroll', ScrollTrigger.update);

// Initialize Fancybox
Fancybox.bind('[data-fancybox]', {
    Toolbar: {
        display: ['close']
    }
});

// Navbar scroll behavior
const navbar = document.querySelector('.navbar');
scroll.on('scroll', (args) => {
    if (args.scroll.y > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero section animations
gsap.from('.hero-content h1', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
});

gsap.from('.hero-content p', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: 'power4.out'
});

// Portfolio items animation
document.querySelectorAll('.portfolio-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            scroller: '[data-scroll-container]',
            start: 'top bottom',
            end: 'top center',
            scrub: 1
        },
        y: 100,
        opacity: 0
    });
});

// About section animation
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about-text',
        scroller: '[data-scroll-container]',
        start: 'top bottom',
        end: 'top center',
        scrub: 1
    },
    x: -100,
    opacity: 0
});

gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about-image',
        scroller: '[data-scroll-container]',
        start: 'top bottom',
        end: 'top center',
        scrub: 1
    },
    x: 100,
    opacity: 0
});

// Contact form animation
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        scroller: '[data-scroll-container]',
        start: 'top bottom',
        end: 'top center',
        scrub: 1
    },
    y: 50,
    opacity: 0
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        scroll.scrollTo(targetId);
    });
});