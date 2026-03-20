// #slider swiper
var slider_swiper = new Swiper(".sliderSwiper", {
    navigation: {
        nextEl: "#slider .swiper-button-next",
        prevEl: "#slider .swiper-button-prev",
    },
    pagination: {
        el: "#slider .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// #new swiper
const swiper = new Swiper('.newSwiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
        el: '#new .swiper-pagination',
        clickable: true,
        type: "fraction",
    },
    navigation: {
        nextEl: "#new .swiper-button-next",
        prevEl: "#new .swiper-button-prev",
    },
    slidesPerGroup: 5
});