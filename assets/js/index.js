document.addEventListener('DOMContentLoaded', function () {
    var splide1 = new Splide('#availabile-games-slides', {
        arrows: false,
        type: "loop",
        pagination: false,
        perPage: 6,
        perMove: 1,
        focus: "center",
        gap: "50px",
        breakpoints: {
            1400: {
                perPage: 5,
                gap: "30px",
            },
            992: {
                perPage: 2,
                gap: "30px",
            },
            768:{
                perPage: 4,
                gap: "30px",
            },
            640: {
                perPage: 3,
            },
            450: {
                perPage: 2,
            },
        }
    });
    splide1.mount();
});