document.addEventListener('DOMContentLoaded', function () {
    var splide1 = new Splide('#availabile-games-slides', {
        arrows: false,
        type: "loop",
        pagination: false,
        perPage: 4,
        perMove: 1,
        focus: "center",
        gap: "50px",
        breakpoints: {
            1400: {
                perPage: 3,
                gap: "30px",
            },
            992: {
                perPage: 2,
                gap: "30px",
            },
            640: {
                perPage: 1,
            },
        }
    });
    splide1.mount();
});