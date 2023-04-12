let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// scroll reveal
// อักษรขยับ
ScrollReveal({ 
    reset : true,
    distance : '80px',
    duration : 2000,
    delay : 200
});

ScrollReveal().reveal('.strategic-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.strategic-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.strategic-content p, .strategic-about-content', { origin: 'right' });


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        768: {
            slidesPerView: 2,
        },
    },
    loop : true,
    grabCursor : true, 
});