const slider = document.querySelector(".food-scroll");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

// Initialize 3D Stack Carousels (Desktop & Mobile)
function initStackCarousel(wrapperSelector, btnsSelector) {
    const cards = Array.from(document.querySelectorAll(`${wrapperSelector} .destination-card`));
    if (cards.length < 2) return;

    const btns = document.querySelectorAll(`${btnsSelector} .btn`);
    const wrapper = document.querySelector(wrapperSelector);
    const positionClasses = ['card1', 'card2', 'card3', 'card4'];
    let current = positionClasses.slice(0, cards.length);

    function applyRotation() {
        cards.forEach((el, i) => {
            el.classList.remove('card1', 'card2', 'card3', 'card4', 'active');
            const cls = current[i] || positionClasses[i % positionClasses.length];
            el.classList.add(cls);

            const posIndex = positionClasses.indexOf(cls);
            const centerIndex = positionClasses.indexOf('card2');
            const relative = posIndex - centerIndex; // -1 left, 0 center (active), 1 right, 2 back

            const isMobile = window.innerWidth < 992;
            const gap = isMobile ? (window.innerWidth < 600 ? 70 : 90) : 130;
            const tx = relative * gap;
            const ty = relative === 0 ? -10 : Math.abs(relative) * 10;
            const scale = relative === 0 ? 1.08 : (Math.abs(relative) === 1 ? 0.88 : 0.78);

            el.style.transform = `translateX(${tx}px) translateY(${ty}px) scale(${scale})`;
            el.style.zIndex = relative === 0 ? '6' : Math.max(1, 5 - Math.abs(relative));

            if (relative === 0) {
                el.classList.add('active');
                el.style.opacity = '1';
            } else {
                el.style.opacity = relative === 2 ? '0.45' : '0.72';
            }
        });
    }

    function rotateNext() {
        current.unshift(current.pop());
        applyRotation();
    }

    function rotatePrev() {
        current.push(current.shift());
        applyRotation();
    }

    let timer = null;
    function startAutoplay() {
        stopAutoplay();
        timer = setInterval(rotateNext, 4000);
    }

    function stopAutoplay() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    if (btns && btns.length >= 2) {
        btns[1].addEventListener('click', () => {
            rotateNext();
            resetAutoplay();
        });
        btns[0].addEventListener('click', () => {
            rotatePrev();
            resetAutoplay();
        });
    }

    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoplay);
        wrapper.addEventListener('mouseleave', startAutoplay);
    }

    cards.forEach((el, idx) => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
            let safety = 0;
            while (current[idx] !== 'card2' && safety < cards.length) {
                current.unshift(current.pop());
                safety++;
            }
            applyRotation();
            resetAutoplay();
        });
    });

    applyRotation();
    startAutoplay();
}

document.addEventListener("DOMContentLoaded", () => {
    initStackCarousel('.desktop-cards-wrapper', '.desktop-slider-btns');
    initStackCarousel('.mobile-cards-wrapper', '.mobile-slider-btns');
});

slider.addEventListener("mouseleave", () => isDown = false);
slider.addEventListener("mouseup", () => isDown = false);

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Drag speed
    slider.scrollLeft = scrollLeft - walk;
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});