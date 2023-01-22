const slider = () => {

    const swiperTop = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const swiper = new Swiper(".carousel-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        }, breakpoints: {
            500: {
                slidesPerView: 1,
            },
            850: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
};

export default slider;