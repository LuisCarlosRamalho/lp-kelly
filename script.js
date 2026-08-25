document.addEventListener('DOMContentLoaded', () => {
    
    // --- NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check on load

    // --- SMOOTH ANCHOR LINK SCROLLING ---
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Offset for fixed navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER) ---
    const revealElements = document.querySelectorAll('.pain-card, .solution-content, .solution-callout-wrapper, .vsl-video-block, .diff-content, .diff-image-wrapper, .hero-content, .hero-image-wrapper');
    
    // Add base reveal class to target elements
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Offset trigger point slightly
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- INTERACTIVE PLAY BUTTON MOCK ---
    const playTrigger = document.getElementById('play-video-trigger');
    if (playTrigger) {
        playTrigger.addEventListener('click', () => {
            // Mock VSL video playback start
            const overlay = playTrigger.querySelector('.video-overlay');
            const placeholderImg = playTrigger.querySelector('.video-placeholder-bg');
            
            if (overlay && placeholderImg) {
                overlay.style.transition = 'opacity 0.5s ease';
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    // Informative alert for demonstration
                    alert('Carregando VSL de Quelliane Galdino... (Este é um vídeo de demonstração interativo)');
                }, 500);
            }
        });
    }
});
