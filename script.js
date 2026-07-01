document.addEventListener('DOMContentLoaded', () => {
    const menuOpener = document.getElementById('menuOpener');
    const menuCloser = document.getElementById('menuCloser');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const header = document.querySelector('.main-header');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    menuOpener.addEventListener('click', () => {
        mobileOverlay.classList.add('active');
    });

    menuCloser.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });
    document.querySelectorAll('.mobile-nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
        });
    });
    window.addEventListener('scroll', () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === currentSection) {
                item.classList.add('active');
            }
        });
        if (window.scrollY > 100) {
            header.style.top = "0";
            header.style.width = "100%";
            header.style.borderRadius = "0";
            header.style.background = "rgba(10, 10, 10, 0.95)";
        } else {
            header.style.top = "25px";
            header.style.width = "90%";
            header.style.borderRadius = "100px";
            header.style.background = "rgba(255, 255, 255, 0.08)";
        }
    });
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.style.opacity = "0";
    setTimeout(() => {
        heroTitle.style.transition = "2s opacity";
        heroTitle.style.opacity = "1";
    }, 500);
});
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('appear');
                }, index * 100); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-reveal').forEach(el => {
        observer.observe(el);
    });
    window.addEventListener('scroll', () => {
        const icons = document.querySelectorAll('.v-icon');
        icons.forEach(icon => {
            const speed = 0.05;
            const rect = icon.getBoundingClientRect();
            if(rect.top < window.innerHeight && rect.bottom > 0) {
                const shift = (window.innerHeight - rect.top) * speed;
                icon.style.transform = `translateY(-${shift}px)`;
            }
        });
    });
});
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('serviceType').value;
    const message = document.getElementById('message').value;
    const myNumber = "966532700788"; 
    const fullMessage = `السلام عليكم، أريد طلب خدمة من شركة أسفلت بجدة:%0A
    *الاسم:* ${name}%0A
    *الجوال:* ${phone}%0A
    *نوع الخدمة:* ${service}%0A
    *التفاصيل:* ${message}`;
    window.open(`https://wa.me/${myNumber}?text=${fullMessage}`, '_blank');
});