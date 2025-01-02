var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 1,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function stopMarquee() {
    document.getElementById("myMarquee").stop();
}