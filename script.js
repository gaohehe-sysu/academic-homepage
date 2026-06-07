document.documentElement.classList.add('js-enabled');

const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll('header[id], main section[id]');

function setNavState() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 24);
}

function closeNav() {
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        event.preventDefault();
        closeNav();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach((element) => {
    revealObserver.observe(element);
});

const navObserver = new IntersectionObserver((entries) => {
    const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (!visibleSections.length) return;

    const activeId = visibleSections[0].target.id;
    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
}, {
    threshold: [0.16, 0.32, 0.56],
    rootMargin: '-84px 0px -55% 0px'
});

sections.forEach((section) => {
    navObserver.observe(section);
});

window.addEventListener('scroll', setNavState, { passive: true });
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeNav();
});

setNavState();
