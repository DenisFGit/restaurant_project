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

    updateArrows(); // Run once on load

    // Run again whenever Slick updates
    $('.slider__wrapper').on('afterChange', updateArrows);

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_media');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        burger.classList.toggle('burger_active');
    });
    console.log(burger);
    console.log(nav);


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
});