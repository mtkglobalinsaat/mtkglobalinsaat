/* ============================================================
   MTK GLOBAL İNŞAAT – main.js (v8)
   ============================================================ */

/* ========== PROJE GALERİLERİ ========== */
const projectGalleries = {
    'ana-1': [
        { src: 'assets/img/ana-projeler/proje-1.jpg', title: 'Modern Endüstriyel Tesis' },
        { src: 'assets/img/projeler/proje-1.jpg', title: 'Kaba Yapı Çalışması' },
        { src: 'assets/img/projeler/proje-2.jpg', title: 'İç Mekan Boya İşleri' }
    ],
    'ana-2': [
        { src: 'assets/img/ana-projeler/proje-2.jpg', title: 'Kaba Yapı Projesi' },
        { src: 'assets/img/projeler/proje-3.jpg', title: 'Koridor Yenileme' },
        { src: 'assets/img/projeler/proje-4.jpg', title: 'Boya ve Alçı Uygulaması' }
    ],
    'ana-3': [
        { src: 'assets/img/ana-projeler/proje-3.jpg', title: 'Beyazcity Rezidans' },
        { src: 'assets/img/projeler/proje-5.jpg', title: 'Sıhhi Tesisat Altyapısı' },
        { src: 'assets/img/projeler/proje-6.jpg', title: 'Parke Döşeme' }
    ],
    'ana-4': [
        { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80', title: 'Modern Villa - Dış Görünüm' },
        { src: 'assets/img/projeler/proje-7.jpg', title: 'Kara Sıva Uygulaması' },
        { src: 'assets/img/projeler/proje-8.jpg', title: 'PVC Zemin Kaplama' }
    ],
    'ana-5': [
        { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', title: 'Ticari Ofis Binası' },
        { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80', title: 'Modern Ofis İç Mekan' }
    ],
    'ana-6': [
        { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80', title: 'Dış Cephe Mantolama' }
    ],
    'ana-7': [
        { src: 'assets/img/projeler/proje-10.jpg', title: 'İç Mekan Yenileme' }
    ],
    'guncel-1': [
        { src: 'assets/img/projeler/proje-1/kapak.jpg', title: 'Kaba İnşaat Kalıp Uygulaması' }
    ],
    'guncel-2': [
        { src: 'assets/img/projeler/proje-2/kapak.jpg', title: 'Dış Mantolama ve Boya' }
    ],
    'guncel-3': [
        { src: 'assets/img/projeler/proje-3/kapak.jpg', title: 'Dış Cephe Uygulaması' }
    ],
    'guncel-4': [
        { src: 'assets/img/projeler/proje-4/kapak.jpg', title: 'Dış Cephe Projesi' }
    ],
    'guncel-5': [
        { src: 'assets/img/projeler/proje-5/1.jpg', title: 'Beton Kalıp ve İnce İnşaat - 1' },
        { src: 'assets/img/projeler/proje-5/2.jpg', title: 'Beton Kalıp ve İnce İnşaat - 2' },
        { src: 'assets/img/projeler/proje-5/3.jpg', title: 'Beton Kalıp ve İnce İnşaat - 3' },
        { src: 'assets/img/projeler/proje-5/4.jpg', title: 'Beton Kalıp ve İnce İnşaat - 4' },
        { src: 'assets/img/projeler/proje-5/5.jpg', title: 'Beton Kalıp ve İnce İnşaat - 5' }
    ],
    'guncel-6': [
        { src: 'assets/img/projeler/proje-6/kapak.jpg', title: 'Dış Cephe Mantolama' }
    ],
    'guncel-7': [
        { src: 'assets/img/projeler/proje-7/kapak.jpg', title: 'Çatı Yenileme' }
    ],
    'guncel-8': [
        { src: 'assets/img/projeler/proje-8/kapak.jpg', title: 'Mantolama Dış' }
    ],
    'guncel-9': [
        { src: 'assets/img/projeler/proje-9/kapak.jpg', title: 'Arnavutluk Dış Cephe Mantolama ve Komple İnce İnşaat' }
    ],
    'guncel-10': [
        { src: 'assets/img/projeler/proje-10/kapak.jpg', title: 'Dış Cephe Projesi' }
    ]
};

/* ========== GLIGHTBOX ========== */
let activeLightbox = null;
function openProjectGallery(id) {
    const items = projectGalleries[id];
    if (!items || !items.length) return;
    if (typeof GLightbox === 'undefined') return;
    if (activeLightbox) { try { activeLightbox.destroy(); } catch (e) {} activeLightbox = null; }
    const elements = items.map(function (item) {
        return { href: item.src, type: 'image', title: item.title };
    });
    activeLightbox = GLightbox({
        elements: elements,
        touchNavigation: true,
        loop: true,
        zoomable: true,
        openEffect: 'zoom',
        closeEffect: 'fade',
        slideEffect: 'slide',
        moreLength: 0
    });
    document.body.style.cursor = 'auto';
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (dot) dot.style.display = 'none';
    if (ring) ring.style.display = 'none';
    activeLightbox.on('close', function () {
        document.body.style.cursor = 'none';
        if (dot) dot.style.display = 'block';
        if (ring) ring.style.display = 'block';
    });
    activeLightbox.open();
    if (typeof activeLightbox.openAt === 'function') activeLightbox.openAt(0);
}
window.openProjectGallery = openProjectGallery;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project-showcase').forEach(function (card) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('data-project');
            if (id) openProjectGallery(id);
        });
    });
});

/* ========== İMLEÇ ========== */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
let isMobile = window.innerWidth < 992;
if (!isMobile && cursorDot && cursorRing) {
    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX; mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();
    document.querySelectorAll('a, button, .service-card, .project-showcase, .accordion-button').forEach(function (el) {
        el.addEventListener('mouseenter', function () { cursorRing.classList.add('hover'); });
        el.addEventListener('mouseleave', function () { cursorRing.classList.remove('hover'); });
    });
}

/* ========== SCROLL PROGRESS ========== */
window.addEventListener('scroll', function () {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const progress = document.getElementById('scrollProgress');
    if (progress) progress.style.width = scrolled + '%';
});

/* ========== HAFİF THREE.JS ========== */
(function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;
    const isMobileDevice = window.innerWidth < 768;
    const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const particlesCount = (isMobileDevice || isLowPower) ? 150 : 400;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const pG = new THREE.BufferGeometry();
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) pos[i] = (Math.random() - 0.5) * 15;
    pG.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pM = new THREE.PointsMaterial({ size: 0.025, color: 0xff9500, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending });
    const particles = new THREE.Points(pG, pM);
    scene.add(particles);
    camera.position.z = 5;
    let scrollY = 0;
    window.addEventListener('scroll', function () { scrollY = window.scrollY; }, { passive: true });
    let animId = null;
    function animate() {
        animId = requestAnimationFrame(animate);
        particles.rotation.y += 0.0006;
        particles.rotation.x += 0.0002;
        camera.position.z = 5 - Math.min(scrollY * 0.001, 2);
        renderer.render(scene, camera);
    }
    animate();
    document.addEventListener('visibilitychange', function () {
        if (document.hidden && animId) { cancelAnimationFrame(animId); animId = null; }
        else if (!document.hidden && !animId) { animate(); }
    });
    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();

/* ========== SAYAÇLAR ========== */
function initCounters() {
    document.querySelectorAll('[data-count]').forEach(function (el) {
        if (el.dataset.counted === 'true') return;
        el.dataset.counted = 'true';
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = target / 60;
        const interval = setInterval(function () {
            current += step;
            if (current >= target) { current = target; clearInterval(interval); }
            el.textContent = Math.floor(current) + '+';
        }, 25);
    });
}

/* ========== TEMA DEĞİŞTİRİCİ ========== */
function initThemeToggle() {
    const savedTheme = localStorage.getItem('mtk-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        updateThemeIcon(document.body.classList.contains('light-mode'));
        toggleBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('mtk-theme', isLight ? 'light' : 'dark');
            updateThemeIcon(isLight);
        });
    }
}
function updateThemeIcon(isLight) {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;
    const icon = toggleBtn.querySelector('i');
    if (icon) icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
}

document.addEventListener('DOMContentLoaded', function () {
    initCounters();
    initThemeToggle();
});

/* ========== SWIPER + GSAP ========== */
$(document).ready(function () {
    if (typeof WOW !== 'undefined') {
        new WOW({ boxClass: 'wow', animateClass: 'animate__animated', offset: 80, mobile: true }).init();
    }
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.section-3d').forEach(function (sec) {
            gsap.from(sec, {
                opacity: 0, y: 60, duration: 1,
                scrollTrigger: { trigger: sec, start: 'top 85%', toggleActions: 'play none none reverse' }
            });
        });
    }
    if (typeof Swiper !== 'undefined' && document.getElementById('heroSlider')) {
        const swiper = new Swiper('#heroSlider', {
            loop: true, speed: 1000, effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: { delay: 6000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            grabCursor: true
        });
        document.querySelectorAll('.swiper-button-next').forEach(function (btn) {
            btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); swiper.slideNext(); });
        });
        document.querySelectorAll('.swiper-button-prev').forEach(function (btn) {
            btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); swiper.slidePrev(); });
        });
    }
    $(window).on('scroll', function () {
        $('#mainNav').toggleClass('scrolled', $(this).scrollTop() > 80);
    });
});