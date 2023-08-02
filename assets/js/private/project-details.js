var prjdetWrprSl = new Swiper(".prjdetWrprSl", {
    loop:true,
    slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween:30,
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var prjdetRelSl = new Swiper(".prjdetRelSl", {
    loop:true,
    slidesPerView: 4,
    // centeredSlides: true,
    spaceBetween:30,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween:5,
        },
        539: {
            slidesPerView: 2,
            spaceBetween:20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween:20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween:30,
        },
    }
});
