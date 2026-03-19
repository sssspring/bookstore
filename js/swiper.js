// #slider swiper

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: "#slider.swiper-button-next",
        prevEl: "#slider.swiper-button-prev",
    },
    pagination: {
        el: "#slider .swiper-pagination",
        clickable: true,
    },
});

    // # new swiper

    var new_swiper = new Swiper("new Swiper",{
        sliderPerView: 5,
        spaceBeween:30,
        pagination:{
            el:'@new .swiper-pagination',clickable: true,
        },
        navigation: {
        nextEl: "#slider.swiper-button-next",
        prevEl: "#slider.swiper-button-prev",
        },
    });