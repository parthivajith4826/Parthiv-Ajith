// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2', 'shadow-lg');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2', 'shadow-lg');
        }
    });

    // --- Hero Animations ---
    const heroTl = gsap.timeline();

    heroTl.from('#navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.flex a', {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6');

    // --- Typing Effect ---
    // Simple implementation for "Python & Django Developer"
    const textElement = document.querySelector('.typewriter');
    const textToType = textElement.innerText;
    textElement.innerText = '';
    
    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            textElement.innerText += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Typing speed
        }
    }
    
    // Start typing after hero animation
    setTimeout(typeWriter, 2000); // 2s delay


    // --- Scroll Animations (General Section Reveal) ---
    const sections = ['#about', '#skills', '#projects', '#contact'];
    
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // --- Skills Grid Stagger ---
    gsap.from('#skills .glass-card', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });

    // --- Projects Stagger ---
    gsap.from('#projects .glass-card', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });



    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Close menu when clicking outside (optional but good UX)
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

});
