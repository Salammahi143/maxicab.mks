
jQuery(function ($) {
    'use strict';
    //team-slider
    $('.team-slider').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
   
}(jQuery));