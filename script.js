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

        // Header background on scroll
const header = document.querySelector('header');
function handleScroll() {
    if (window.scrollY > 50) { // Jarak scroll sebelum header berubah
        header.classList.add('scrolled');
        header.classList.remove('top');
    } else {
        header.classList.add('top');
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);
// Jalankan sekali saat memuat halaman untuk set state awal
document.addEventListener('DOMContentLoaded', handleScroll);

        // Animate skill bars on scroll
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 500);
                    });
                }
            });
        }, observerOptions);

        observer.observe(document.querySelector('.skills'));

       // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        });

        // Form submission - DITANGANI OLEH FORMSpree
        document.querySelector('.contact-form form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        e.target.reset();
        });

        // Add loading animation to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'all 0.6s ease';
            }, index * 200);
        });