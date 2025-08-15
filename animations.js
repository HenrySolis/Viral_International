// Advanced Animation System for Viral International
// Inspired by modern agencies like Growi and cutting-edge web animations

class ViralAnimations {
    constructor() {
        this.init();
        this.setupScrollAnimations();
        this.setupMouseEffects();
        this.setupTypingAnimations();
        this.setupParallaxEffects();
        this.setupMorphingElements();
        this.setupInteractiveElements();
        this.setupAdvancedEffects();
    }

    init() {
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.setupIntersectionObserver();
            this.setupNavigationEffects();
            this.setupCursorFollower();
            this.setupFloatingElements();
            this.setupStaggerAnimations();
            this.startAnimationLoop();
        });
    }

    // Intersection Observer for scroll-triggered animations
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add animation classes based on element type
                    if (element.classList.contains('reveal')) {
                        element.classList.add('on');
                    }
                    
                    if (element.classList.contains('stagger-animation')) {
                        element.classList.add('animate');
                        this.staggerChildren(element);
                    }
                    
                    // Trigger section-specific animations
                    if (element.hasAttribute('data-animate')) {
                        this.triggerSectionAnimation(element);
                    }
                }
            });
        }, options);

        // Observe all animated elements
        document.querySelectorAll('.reveal, .stagger-animation, [data-animate]').forEach(el => {
            this.observer.observe(el);
        });
    }

    // Stagger animation for child elements
    staggerChildren(container) {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
            setTimeout(() => {
                child.style.animation = `slideInUp 0.8s ease-out ${index * 0.1}s both`;
            }, index * 100);
        });
    }

    // Section-specific animations
    triggerSectionAnimation(section) {
        const sectionId = section.id;
        
        switch(sectionId) {
            case 'services':
                this.animateServiceCards();
                break;
            case 'about':
                this.animateAboutSection();
                break;
            case 'expertise':
                this.animateExpertiseSection();
                break;
            case 'testimonials':
                this.animateTestimonials();
                break;
            case 'team':
                this.animateTeamCards();
                break;
        }
        
        // Add section line animation
        section.classList.add('animated');
    }

    // Animate service cards with special effects
    animateServiceCards() {
        const cards = document.querySelectorAll('#services .card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `bounceIn 1s ease-out both`;
                
                // Add hover glow effect
                card.addEventListener('mouseenter', () => {
                    card.style.boxShadow = '0 20px 60px rgba(212,175,55,0.3)';
                    card.style.transform = 'translateY(-12px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)';
                    card.style.transform = 'translateY(0) scale(1)';
                });
            }, index * 150);
        });
    }

    // Animate about section with morphing cards
    animateAboutSection() {
        const cards = document.querySelectorAll('#about .card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `fadeInScale 1.2s ease-out both`;
                card.classList.add('animate-morph');
            }, index * 200);
        });
    }

    // Animate expertise section with complex transitions
    animateExpertiseSection() {
        const expertiseBlocks = document.querySelectorAll('.expertise');
        expertiseBlocks.forEach((block, index) => {
            const card = block.querySelector('.card');
            const img = block.querySelector('.img');
            
            setTimeout(() => {
                if (index % 2 === 0) {
                    card.style.animation = 'slideInLeft 1s ease-out both';
                    img.style.animation = 'slideInRight 1s ease-out both';
                } else {
                    card.style.animation = 'slideInRight 1s ease-out both';
                    img.style.animation = 'slideInLeft 1s ease-out both';
                }
            }, index * 300);
        });
    }

    // Animate testimonials with floating effect
    animateTestimonials() {
        const testimonials = document.querySelectorAll('.testimonial');
        testimonials.forEach((testimonial, index) => {
            setTimeout(() => {
                testimonial.style.animation = `bounceIn 1.2s ease-out both`;
                testimonial.classList.add('animate-float');
            }, index * 200);
        });
    }

    // Animate team cards with rotation
    animateTeamCards() {
        const teamCards = document.querySelectorAll('.team-card');
        teamCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `rotateIn 1s ease-out both`;
            }, index * 250);
        });
    }

    // Setup cursor follower effect
    setupCursorFollower() {
        const follower = document.getElementById('cursorFollower');
        if (!follower) return;

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            follower.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            follower.style.opacity = '0';
        });

        // Smooth following animation
        const animateFollower = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            follower.style.transform = `translate(${followerX - 4}px, ${followerY - 4}px)`;
            requestAnimationFrame(animateFollower);
        };
        animateFollower();

        // Interactive elements
        document.querySelectorAll('a, button, .card').forEach(element => {
            element.addEventListener('mouseenter', () => {
                follower.style.transform += ' scale(3)';
                follower.style.opacity = '0.3';
            });
            
            element.addEventListener('mouseleave', () => {
                follower.style.transform = follower.style.transform.replace(' scale(3)', '');
                follower.style.opacity = '1';
            });
        });
    }

    // Setup floating elements background
    setupFloatingElements() {
        const container = document.querySelector('.floating-elements');
        if (!container) return;

        // Add more floating elements dynamically
        for (let i = 4; i < 12; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.textContent = ['💎', '🌟', '⚡', '🎨', '🔥', '💫', '✨', '🚀'][i % 8];
            element.style.top = Math.random() * 100 + '%';
            element.style.left = Math.random() * 100 + '%';
            element.style.animationDelay = Math.random() * 10 + 's';
            element.style.animationDuration = (15 + Math.random() * 10) + 's';
            container.appendChild(element);
        }
    }

    // Setup navigation effects
    setupNavigationEffects() {
        const navbar = document.getElementById('navbar');
        const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');

        // Navbar scroll effect
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                navbar.style.background = 'rgba(255,255,255,0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'rgba(255,255,255,0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }

            // Hide/show navbar on scroll
            if (scrollY > lastScrollY && scrollY > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollY = scrollY;
        });

        // Mobile menu toggle with animation
        if (menuToggle && menu) {
            menuToggle.addEventListener('click', () => {
                menu.classList.toggle('is-open');
                
                if (menu.classList.contains('is-open')) {
                    menuToggle.innerHTML = '✕';
                    menuToggle.style.transform = 'rotate(180deg)';
                } else {
                    menuToggle.innerHTML = 'Menu';
                    menuToggle.style.transform = 'rotate(0deg)';
                }
            });
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Setup typing animations for text elements
    setupTypingAnimations() {
        const typeElements = document.querySelectorAll('.text-reveal');
        
        typeElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid var(--accent)';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                } else {
                    element.style.borderRight = 'none';
                }
            };
            
            // Start typing when element is visible
            this.observer.observe(element);
            element.addEventListener('animationstart', typeWriter);
        });
    }

    // Setup parallax effects
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero::before, .expertise .img img');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    // Setup morphing elements
    setupMorphingElements() {
        const morphElements = document.querySelectorAll('.animate-morph');
        
        morphElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.borderRadius = '25px';
                element.style.transform = 'scale(1.02) rotate(1deg)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.borderRadius = '14px';
                element.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }

    // Setup interactive elements with advanced effects
    setupInteractiveElements() {
        // Glow effect for icons
        document.querySelectorAll('.icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.boxShadow = '0 0 30px rgba(212,175,55,0.6)';
                icon.style.transform = 'scale(1.3) rotate(360deg)';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.boxShadow = 'none';
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Button ripple effect
        document.querySelectorAll('.btn, .btn-primary').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple CSS
        const style = document.createElement('style');
        style.textContent = `
            .btn, .btn-primary { position: relative; overflow: hidden; }
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            }
            @keyframes ripple-animation {
                to { transform: scale(4); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // Advanced effects and interactions
    setupAdvancedEffects() {
        // Card tilt effect
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) / (rect.width / 2);
                const deltaY = (e.clientY - centerY) / (rect.height / 2);
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateY(${deltaX * 5}deg) 
                    rotateX(${-deltaY * 5}deg) 
                    translateZ(10px)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
            });
        });

        // Magnetic effect for buttons
        document.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) * 0.1;
                const deltaY = (e.clientY - centerY) * 0.1;
                
                button.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });

        // Text scramble effect for headings
        this.setupTextScramble();
    }

    // Text scramble animation
    setupTextScramble() {
        const scrambleText = (element) => {
            const text = element.textContent;
            const chars = '!<>-_\\/[]{}—=+*^?#________';
            let iterations = 0;
            
            const interval = setInterval(() => {
                element.textContent = text
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                if (iterations >= text.length) {
                    clearInterval(interval);
                }
                
                iterations += 1 / 3;
            }, 30);
        };

        document.querySelectorAll('h2.title').forEach(title => {
            title.addEventListener('mouseenter', () => scrambleText(title));
        });
    }

    // Main animation loop for continuous effects
    startAnimationLoop() {
        const animate = () => {
            // Update floating elements
            this.updateFloatingElements();
            
            // Update gradient animations
            this.updateGradients();
            
            // Continue loop
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    // Update floating elements positions
    updateFloatingElements() {
        const elements = document.querySelectorAll('.floating-element');
        elements.forEach((element, index) => {
            const time = Date.now() * 0.001;
            const x = Math.sin(time + index) * 20;
            const y = Math.cos(time + index * 0.5) * 15;
            
            element.style.transform = `translate(${x}px, ${y}px) rotate(${time * 10 + index * 30}deg)`;
        });
    }

    // Update gradient animations
    updateGradients() {
        const gradients = document.querySelectorAll('.gradient-shift');
        gradients.forEach(element => {
            const time = Date.now() * 0.001;
            const hue = (time * 20) % 360;
            element.style.filter = `hue-rotate(${hue}deg)`;
        });
    }

    // Stagger animations setup
    setupStaggerAnimations() {
        // Hero badges animation
        const heroBadges = document.getElementById('heroBadges');
        if (heroBadges) {
            setTimeout(() => {
                heroBadges.classList.add('animate');
            }, 1000);
        }

        // Logo strip animation
        const logoStrip = document.getElementById('logoStrip');
        if (logoStrip) {
            setTimeout(() => {
                logoStrip.classList.add('animate');
            }, 1500);
        }
    }

    // Setup mouse effects
    setupMouseEffects() {
        // Create particle system for mouse movement
        const particles = [];
        const particleCount = 5;
        
        document.addEventListener('mousemove', (e) => {
            // Create particle
            if (particles.length < particleCount) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.width = '4px';
                particle.style.height = '4px';
                particle.style.backgroundColor = 'var(--accent)';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9998';
                particle.style.left = e.clientX + 'px';
                particle.style.top = e.clientY + 'px';
                particle.style.opacity = '0.7';
                
                document.body.appendChild(particle);
                particles.push(particle);
                
                // Animate particle
                let opacity = 0.7;
                const fadeOut = setInterval(() => {
                    opacity -= 0.05;
                    particle.style.opacity = opacity;
                    
                    if (opacity <= 0) {
                        clearInterval(fadeOut);
                        document.body.removeChild(particle);
                        const index = particles.indexOf(particle);
                        if (index > -1) particles.splice(index, 1);
                    }
                }, 50);
            }
        });
    }
}

// Initialize the animation system
const viralAnimations = new ViralAnimations();

// Additional utility functions for performance
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Optimized scroll handler
window.addEventListener('scroll', debounce(() => {
    // Trigger scroll-based animations here
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Add parallax effect to hero
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroRect = hero.getBoundingClientRect();
        if (heroRect.bottom > 0) {
            const parallaxValue = scrolled * 0.3;
            hero.style.transform = `translateY(${parallaxValue}px)`;
        }
    }
}, 16)); // ~60fps

// Preload critical animations
document.addEventListener('DOMContentLoaded', () => {
    // Force hardware acceleration for smooth animations
    const criticalElements = document.querySelectorAll('.card, .btn, .icon, .hero');
    criticalElements.forEach(el => {
        el.style.willChange = 'transform, opacity';
        el.style.backfaceVisibility = 'hidden';
        el.style.perspective = '1000px';
    });
});

// Cleanup function for performance
window.addEventListener('beforeunload', () => {
    // Clean up event listeners and intervals
    if (viralAnimations.observer) {
        viralAnimations.observer.disconnect();
    }
});