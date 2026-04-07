const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');

    // Menyu ochiq bo'lganda body scrollni bloklash
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

if (hamburger && mobileMenu && overlay) {
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
}

// Menyudagi link bosilganda yopish
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Katta ekranga o'tganda menyuni yopish
window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
});

// Header scroll effekti (FAQAT katta ekranda)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.innerWidth > 480) {  // Faqat katta ekranda ishlasin
        if (window.scrollY > 50) {
            header.style.height = '70px';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.height = '100px';
            header.style.background = 'rgba(255, 255, 255, 0.75)';
        }
    } else {
        // Mobil ekranda header balandligi CSS ga qoldiramiz
        header.style.height = '';
        header.style.background = '';
    }
});