// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if it's open
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.querySelector('#mobile-menu-button i');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        }
    });
});

// Section visibility on scroll with enhanced animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Add animation class to child elements
            const elements = entry.target.querySelectorAll('h2, p, .bg-gray-800\\/50');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('animate-in');
                }, index * 100);
            });
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
    observer.observe(section);
});

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuButton.querySelector('i');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Toggle between hamburger and close icon
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
            } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
    });

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    });
    });

// Add hover effect to project cards
document.querySelectorAll('#projects .bg-gray-800\\/50').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add hover effect to skill cards
document.querySelectorAll('#skills .bg-gray-800\\/50').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Function to toggle project details visibility
function toggleDetails() {
    const details = document.getElementById('projectDetails');
    if (details) {
        details.classList.toggle('hidden');
    }
}

//Counter
const counter = document.querySelector(".visitor-count");

async function updateCounter() {
    let response = await fetch("https://5cedohs2vgwx7mox5x6vojktza0plgaz.lambda-url.ap-southeast-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` ${data}`;
}

updateCounter();

//FormsSpree
document.getElementById('my-contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var form = event.target;

    var formData = new FormData(form);
    fetch('https://formspree.io/f/myzwjoyv', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        if (response.ok) {
            alert('Your message has been sent!');
            form.reset(); // Reset the form fields
        } else {
            alert('Oops! There was a problem sending your message.');
        }
    })
    .catch(function(error) {
        alert('Oops! There was a problem sending your message.');
    });
});