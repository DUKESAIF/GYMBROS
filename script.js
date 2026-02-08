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
        }
    });
});

// Program Enrollment Function
function enrollProgram(programName) {
    // Get existing enrollments from localStorage
    let enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
    
    // Check if already enrolled
    if (enrollments.includes(programName)) {
        alert(`You are already enrolled in ${programName}!`);
    } else {
        // Add to enrollments
        enrollments.push(programName);
        localStorage.setItem('enrollments', JSON.stringify(enrollments));
        alert(`Successfully enrolled in ${programName}!`);
    }
}

// Course Enrollment Function
function enrollCourse(courseName) {
    // Get existing enrollments from localStorage
    let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    
    // Check if already enrolled
    if (enrolledCourses.includes(courseName)) {
        alert(`You are already enrolled in ${courseName}!`);
    } else {
        // Add to enrollments
        enrolledCourses.push(courseName);
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
        alert(`Successfully enrolled in ${courseName}!`);
    }
}

// Shopping Cart Functions
let cart = [];

function addToCart(productName, price) {
    // Check if product already in cart
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show confirmation
    alert(`${productName} added to cart!`);
    
    // Update cart display if exists
    updateCartDisplay();
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // If cart indicator exists, update it
    let cartIndicator = document.getElementById('cart-indicator');
    if (!cartIndicator && totalItems > 0) {
        // Create cart indicator
        cartIndicator = document.createElement('div');
        cartIndicator.id = 'cart-indicator';
        cartIndicator.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: linear-gradient(135deg, hsl(16, 100%, 50%), hsl(0, 84%, 60%));
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            box-shadow: 0 0 30px hsla(16, 100%, 50%, 0.3);
            z-index: 1000;
            cursor: pointer;
        `;
        document.body.appendChild(cartIndicator);
        
        cartIndicator.addEventListener('click', () => {
            showCart();
        });
    }
    
    if (cartIndicator) {
        cartIndicator.innerHTML = `🛒 Cart: ${totalItems} items`;
        if (totalItems === 0) {
            cartIndicator.remove();
        }
    }
}

function showCart() {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => 
        `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    alert(`Your Cart:\n\n${itemsList}\n\nTotal: $${totalPrice.toFixed(2)}`);
}

// Load cart from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.program-card, .course-card, .nutrition-card, .product-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Newsletter subscription
document.querySelector('.newsletter-form button')?.addEventListener('click', () => {
    const emailInput = document.querySelector('.newsletter-form input');
    const email = emailInput.value;
    
    if (email && email.includes('GYMBROS@gmail.com')) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

console.log('GYMBROS website loaded successfully!');
