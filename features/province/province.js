const slider = document.querySelector(".food-scroll");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

// Destination cards slider (rotate positions on click)
(() => {
    const cardSelector = '.hero .destination-card';
    const cards = Array.from(document.querySelectorAll(cardSelector));
    if (cards.length < 2) return;

    const btns = document.querySelectorAll('.slider-btns .btn');
    if (!btns || btns.length < 2) return;

    const positionClasses = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];
    // initialize a current mapping with as many positions as cards present
    let current = positionClasses.slice(0, cards.length);

    function apply() {
        cards.forEach((el, i) => {
            el.classList.remove('card1', 'card2', 'card3', 'active');
            const cls = current[i] || positionClasses[i % positionClasses.length];
            el.classList.add(cls);

            // compute transform based on assigned position (card2 = center)
            const posIndex = positionClasses.indexOf(cls);
            const centerIndex = positionClasses.indexOf('card2');
            const relative = posIndex - centerIndex; // -1 left, 0 center, 1 right, etc.

            // compute values
            const gap = 150; // horizontal gap in px between positions
            const tx = relative * gap;
            const ty = relative === 0 ? -8 : Math.abs(relative) * 12; // lift center slightly
            const scale = relative === 0 ? 1.06 : 1 - Math.min(Math.abs(relative) * 0.06, 0.18);

            el.style.transform = `translateX(${tx}px) translateY(${ty}px) scale(${scale})`;
            el.style.opacity = relative === 0 ? '1' : '0.9';
            if (relative === 0) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    // Next (right) button - rotate positions forward
    btns[1].addEventListener('click', () => {
        current.unshift(current.pop());
        apply();
    });

    // Prev (left) button - rotate positions backward
    btns[0].addEventListener('click', () => {
        current.push(current.shift());
        apply();
    });

    // Click a card to bring it to center and enlarge
    cards.forEach((el, idx) => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
            // rotate until this card has the 'card2' class
            let safety = 0;
            while (current[idx] !== 'card2' && safety < cards.length) {
                current.unshift(current.pop());
                safety++;
            }
            apply();
        });
    });

    // ensure initial positions are set
    apply();
})();

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