AOS.init();
// =============reviews slider
$('.clients_slider').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    autoplay: true,
    navText:['<span class="iconify" data-icon="guidance:left-arrow"></span>','<span class="iconify" data-icon="guidance:right-arrow"></span>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


// =============our clients slider
$('.dana_woodworks_slider').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: false,
    autoplay: true,
    navText:['<span class="iconify" data-icon="guidance:left-arrow"></span>','<span class="iconify" data-icon="guidance:right-arrow"></span>'],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})




var owl = $('.inner_service_slider');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin: 10,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

// ============blogs slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})