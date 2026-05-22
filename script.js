// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Wishlist Functionality
const wishlistButtons = document.querySelectorAll('.wishlist-btn');
let wishlistCount = 0;

wishlistButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        button.classList.toggle('active');
        
        const svg = button.querySelector('svg');
        const path = svg.querySelector('path');
        
        if (button.classList.contains('active')) {
            path.setAttribute('fill', '#e74c3c');
            path.setAttribute('stroke', '#e74c3c');
            wishlistCount++;
            showNotification('Added to wishlist!');
        } else {
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'currentColor');
            wishlistCount--;
            showNotification('Removed from wishlist');
        }
    });
});

// Quick View Functionality
const quickViewButtons = document.querySelectorAll('.quick-view-btn');

quickViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        const productImage = productCard.querySelector('.product-image img').src;
        
        showQuickView(productName, productPrice, productImage);
    });
});

function showQuickView(name, price, image) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="modal-info">
                    <h2>${name}</h2>
                    <div class="modal-rating">
                        <span class="stars">★★★★★</span>
                        <span>(4.8)</span>
                    </div>
                    <p class="modal-price">${price}</p>
                    <p class="modal-description">
                        Experience luxury and comfort with this premium piece from our collection. 
                        Crafted with attention to detail and made from the finest materials.
                    </p>
                    <div class="size-selector">
                        <h4>Select Size:</h4>
                        <div class="size-options">
                            <button class="size-btn">XS</button>
                            <button class="size-btn">S</button>
                            <button class="size-btn active">M</button>
                            <button class="size-btn">L</button>
                            <button class="size-btn">XL</button>
                        </div>
                    </div>
                    <div class="quantity-selector">
                        <h4>Quantity:</h4>
                        <div class="quantity-controls">
                            <button class="qty-btn minus">-</button>
                            <input type="number" value="1" min="1" max="10" class="qty-input">
                            <button class="qty-btn plus">+</button>
                        </div>
                    </div>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add styles for modal
    addModalStyles();
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    overlay.addEventListener('click', () => closeModal(modal));
    
    // Size selection
    const sizeBtns = modal.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Quantity controls
    const minusBtn = modal.querySelector('.qty-btn.minus');
    const plusBtn = modal.querySelector('.qty-btn.plus');
    const qtyInput = modal.querySelector('.qty-input');
    
    minusBtn.addEventListener('click', () => {
        if (qtyInput.value > 1) qtyInput.value--;
    });
    
    plusBtn.addEventListener('click', () => {
        if (qtyInput.value < 10) qtyInput.value++;
    });
    
    // Add to cart
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        addToCart();
        closeModal(modal);
    });
    
    // Animate modal
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.remove();
        document.body.style.overflow = 'auto';
    }, 300);
}

function addModalStyles() {
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .quick-view-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .quick-view-modal.active {
                opacity: 1;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
            }
            
            .modal-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                border-radius: 15px;
                max-width: 900px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
            }
            
            .modal-close {
                position: absolute;
                top: 20px;
                right: 20px;
                background: white;
                border: none;
                font-size: 2rem;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                z-index: 10;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            }
            
            .modal-close:hover {
                background: #d4af37;
                color: white;
                transform: rotate(90deg);
            }
            
            .modal-body {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 3rem;
                padding: 3rem;
            }
            
            .modal-image img {
                width: 100%;
                height: 500px;
                object-fit: cover;
                border-radius: 10px;
            }
            
            .modal-info h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
                color: #2c2c2c;
            }
            
            .modal-rating {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
                color: #d4af37;
            }
            
            .modal-price {
                font-size: 2rem;
                font-weight: 700;
                color: #2c2c2c;
                margin-bottom: 1.5rem;
            }
            
            .modal-description {
                line-height: 1.8;
                color: #666;
                margin-bottom: 2rem;
            }
            
            .size-selector h4,
            .quantity-selector h4 {
                font-size: 1rem;
                margin-bottom: 1rem;
                color: #2c2c2c;
            }
            
            .size-options {
                display: flex;
                gap: 0.8rem;
                margin-bottom: 2rem;
            }
            
            .size-btn {
                padding: 0.8rem 1.2rem;
                border: 2px solid #e5e5e5;
                background: white;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            }
            
            .size-btn:hover,
            .size-btn.active {
                border-color: #d4af37;
                background: #d4af37;
                color: white;
            }
            
            .quantity-controls {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .qty-btn {
                width: 40px;
                height: 40px;
                border: 2px solid #e5e5e5;
                background: white;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1.2rem;
                font-weight: 600;
                transition: all 0.3s ease;
            }
            
            .qty-btn:hover {
                border-color: #d4af37;
                color: #d4af37;
            }
            
            .qty-input {
                width: 60px;
                height: 40px;
                text-align: center;
                border: 2px solid #e5e5e5;
                border-radius: 5px;
                font-size: 1rem;
                font-weight: 600;
            }
            
            .add-to-cart-btn {
                width: 100%;
                padding: 1.2rem;
                background: #d4af37;
                color: white;
                border: none;
                border-radius: 50px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s ease;
            }
            
            .add-to-cart-btn:hover {
                background: #c49d2e;
                transform: translateY(-2px);
                box-shadow: 0 5px 20px rgba(212, 175, 55, 0.4);
            }
            
            @media (max-width: 768px) {
                .modal-body {
                    grid-template-columns: 1fr;
                    padding: 2rem;
                    gap: 2rem;
                }
                
                .modal-image img {
                    height: 300px;
                }
                
                .modal-info h2 {
                    font-size: 1.5rem;
                }
                
                .modal-close {
                    top: 10px;
                    right: 10px;
                    width: 35px;
                    height: 35px;
                    font-size: 1.5rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Shopping Cart Functionality
let cart = [];
const cartIcon = document.querySelector('.cart-count');

function addToCart() {
    cart.push({ id: Date.now() });
    updateCartCount();
    showNotification('Added to cart!');
}

function updateCartCount() {
    cartIcon.textContent = cart.length;
    
    // Animate cart icon
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: #2c2c2c;
                color: white;
                padding: 1rem 2rem;
                border-radius: 50px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
                z-index: 10001;
                animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    
    if (email) {
        showNotification('Thank you for subscribing!');
        newsletterForm.querySelector('input').value = '';
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.category-card, .product-card, .collection-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Image Lazy Loading Enhancement
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Search Functionality (Basic)
const searchIcon = document.querySelector('.icon-link');
if (searchIcon) {
    searchIcon.addEventListener('click', (e) => {
        if (e.target.closest('.icon-link') === searchIcon) {
            e.preventDefault();
            showNotification('Search feature coming soon!');
        }
    });
}

// Product Card Click Handler
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Only trigger if not clicking on action buttons
        if (!e.target.closest('.action-btn')) {
            const productName = card.querySelector('.product-name').textContent;
            showNotification(`Viewing ${productName}`);
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

console.log('Hksparkle website loaded successfully! 🎉');
