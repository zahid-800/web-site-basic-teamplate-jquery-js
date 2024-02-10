$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            // nav:true
        },
        600: {
            items: 3,
            // nav:false
        },
        1000: {
            items: 5,
            // nav:true,
            loop: false
        }
    }
})