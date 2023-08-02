var hLnewsSl = new Swiper(".hLnewsSl", {
    loop:true,
    slidesPerView: 3,
    // centeredSlides: true,
    spaceBetween:30,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween:10,
        },
        540: {
            slidesPerView: 1,
            spaceBetween:10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween:10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween:15,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween:20,
        },
        1400: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween:30,
        },
    },
});