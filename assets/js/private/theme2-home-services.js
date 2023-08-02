var hmServicsSl = new Swiper(".hmServicsSl", {
    loop:true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween:80,
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
            slidesPerView: 2,
            spaceBetween:35,
        },
        768: {
            slidesPerView: 2,
            spaceBetween:50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween:50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween:60,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween:70,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween:80,
        },
    },
});