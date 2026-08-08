// Province Feature Scripts: 3D Stack Carousel, Food Scroll & Interactive Guide

function initFoodScroll() {
    const slider = document.querySelector(".food-scroll");
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Drag speed multiplier
        slider.scrollLeft = scrollLeft - walk;
    });

    // Optional horizontal wheel scroll
    slider.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
            // Horizontal scroll with vertical wheel if desired
            if (e.shiftKey) return;
        }
    }, { passive: true });
}

// Initialize 3D Stack Carousels (Desktop & Mobile)
function initStackCarousel(wrapperSelector, btnsSelector) {
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll(".destination-card"));
    if (cards.length < 2) return;

    const btns = document.querySelectorAll(`${btnsSelector} .btn`);
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
            const gap = isMobile ? (window.innerWidth < 600 ? 60 : 85) : 125;
            const tx = relative * gap;
            const ty = relative === 0 ? -10 : Math.abs(relative) * 10;
            const scale = relative === 0 ? 1.08 : (Math.abs(relative) === 1 ? 0.88 : 0.78);

            el.style.transform = `translateX(${tx}px) translateY(${ty}px) scale(${scale})`;
            el.style.zIndex = relative === 0 ? '6' : String(Math.max(1, 5 - Math.abs(relative)));

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
        timer = setInterval(rotateNext, 4500);
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

    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 45) {
            rotateNext();
        } else if (touchEndX - touchStartX > 45) {
            rotatePrev();
        }
        startAutoplay();
    }, { passive: true });

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

// Smooth scrolling for in-page anchors (e.g. #travel-tips)
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initFoodScroll();
    initStackCarousel('.desktop-cards-wrapper', '.desktop-slider-btns');
    initStackCarousel('.mobile-cards-wrapper', '.mobile-slider-btns');
    initSmoothScroll();
});