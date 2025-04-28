$(document).ready(function () {
    $('.slider__wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    function updateArrows() {
        const prev = document.querySelector('.slick-prev');
        const next = document.querySelector('.slick-next');
        if (prev && next) {
            prev.innerHTML = '<';
            next.innerHTML = '>';
        }
    }

    updateArrows();

    $('.slider__wrapper').on('afterChange', updateArrows);

});


// burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_media');
burger.addEventListener('click', () => {
    nav.classList.toggle('nav_active');
    burger.classList.toggle('burger_active');
});


//animation when scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.menu__list').forEach(el => {
    observer.observe(el);
});

//modal

const btn = document.querySelectorAll('.button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.modal__close');
btn.forEach((item) => {
    item.addEventListener('click', () => {
        // modal.style.display = 'flex';
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
    });
});

close.addEventListener('click', () => {
    // modal.style.display = 'none';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
});

//form validation



// function validate(){
    
// }