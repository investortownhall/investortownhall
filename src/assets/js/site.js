$(function() {
    "use strict";
    var owl;
    var myCenter;
    var sync1;
    var sync2;
    var filterValue;
    var video1;
    var stickOnScroll;

    //Header Option	
    $('#header').addClass('normal');
    //Choose Here Class Name (normal or fixed or intelligent);

    $(".search-btn").on('click', function() {
        $(".search-input").toggle();
    });

    $(".search-box").on("click", function() {
        $(".search-here").fadeToggle(100);
        $(".main-header").toggleClass("black-header");
        $(this).find(".fa-search").toggleClass("fa-times");
    });

    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip({
            html: true,
            container: 'body'
        });

    }
    // 	gallary isotope
    $(window).load(function() {
        if ($('.gallery-page .news-inner-wrapper').length) {

            var $container = $('.gallery-page .news-inner-wrapper').isotope({
                itemSelector: '.main-item',
                //layoutMode: 'fitRows',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-sizer'

                }
            });

            $('.gallery-block li').on('click', function() {

                var filterValue = "." + $(this).attr('class');
                $container.isotope({
                    filter: filterValue
                });

            });
        }
    });
    if ($('.select').length > 0) {
        $(".select").selectbox();
    }

    $(".correspondents-slides").owlCarousel({
        items: 4,
        itemsTablet: [768, 4],
        itemsMobile: [767, 1],
        navigation: false
    });

    $(".archive-slides").owlCarousel({
        items: 1,
        itemsTablet: [768, 1],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsMobile: [320, 1],
        navigation: true
    });

    $(".shop-now-slides").owlCarousel({
        items: 4,
        itemsTablet: [768, 3],
        itemsDesktopSmall: [979, 3],
        itemsMobile: [767, 1],
        navigation: true
    });

    $(".shop-slides").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsTablet: [768, 2],
        itemsDesktopSmall: [979, 2],
        itemsMobile: [320, 1],
        navigation: true
    });

    $(".inner-blog-slides").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsTablet: [768, 2],
        itemsDesktopSmall: [979, 2],
        itemsMobile: [767, 1],
        navigation: true
    });
    // 	Anoop js

    $(".related-item").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsTablet: [1040, 2],
        itemsDesktopSmall: [979, 2],
        itemsMobile: [320, 1],
        navigation: true,
        pagination: false
    });

    if ($(".owl-carousel").length) {
        var sync1 = $(".owl-thumbs");
        var sync2 = $(".owl-carousel");
        sync2.owlCarousel({
            autoPlay: true,
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            responsiveRefreshRate: 200
        });

        sync1.owlCarousel({
            autoPlay: true,
            items: 5,
            navigation: true,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 5],
            itemsTablet: [768, 3],
            itemsMobile: [479, 2],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function(el) {
                $(".owl-item").eq(0).addClass("synced");
            }
        });

        $(".owl-thumbs").on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync2.trigger("owl.goTo", number);
        });
    }
    //slide js

    $(".panel-heading").on('click', function() {
        $(".panel").siblings().find("i").removeClass('fa-chevron-circle-down');
        $(this).find("i").toggleClass('fa-chevron-circle-down');
    });

    //  shoping anoop

    $('[data-toggle="tooltip"]').tooltip();

    $(".shop-now-slides2").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 5],
        itemsTablet: [768, 4],
        itemsMobile: [320, 2],
        navigation: true

    });

    var owl = $(".magine-slider");

    owl.owlCarousel({
        autoPlay: 3000,
        items: 5.7, //10 items above 1000px browser width
        itemsDesktop: [1000, 5.7], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 5.7], // betweem 900px and 601px
        itemsTablet: [600, 4.7], //2 items between 600 and 0
        itemsMobile: [767, 1] // itemsMobile disabled - inherit from itemsTablet option
    });

    $('.navbar-toggle').on('click', function() {
        $(this).toggleClass('menu');
        $('.navigation').slideToggle();
    });

    $('.pages-menu').on('click', function() {
        if ($(window).width() < 768) {
            $('.drop-down').slideToggle();
        }
    });

    $('.dropdown>a').on('click', function() {
        if ($(window).width() < 768) {
            $(this).next().slideToggle();
        }
    });
    $('.second-dropdown>a').on('click', function() {
        if ($(window).width() < 768) {
            $(this).next().slideToggle();
        }
    });

    $('.navigation > li').on('click', function() {
        if ($(window).width() < 768) {
            $(this).children('.navigation > li > div').slideToggle();
        }
    });

    $("#most-viewed-slider").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 4],
        itemsTablet: [768, 3],
        itemsDesktopSmall: [979, 3],
        itemsMobile: [767, 1]

    });

    if ($("#slider-range1").length) {
        $("#slider-range1").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range1").slider("values", 0) + " - $" + $("#slider-range1").slider("values", 1));
    }

    if ($('.percentage-circle-two').length) {
        $('.percentage-circle-two').appear(function() {
            $('.partners').countTo({
                from: 0,
                to: 1486
            });

            $('.customers').countTo({
                from: 0,
                to: 4800
            });

            $('.purchases').countTo({
                from: 0,
                to: 12175
            });
            $('.Workers').countTo({
                from: 0,
                to: 1136
            });

        });

    }

    if ($("#countdown").length) {
        $("#countdown").countdown({

            until: new Date(2016, 11, 30)
        });

    }

    if ($('.percentage-circle-one').length) {
        $('.percentage-circle-one').appear(function() {

            $('#circle-1').circleProgress({
                value: 0.75,
                size: 166,
                thickness: '15',
                startAngle: -Math.PI / 2,
                fill: { color: "#bc8847" }

            });

            $('#circle-2').circleProgress({
                value: 0.75,
                size: 166,
                thickness: '15',
                startAngle: -Math.PI / 2,
                fill: { color: "#bc8847" }
            });

            $('#circle-3').circleProgress({
                value: 0.75,
                size: 166,
                thickness: '15',
                startAngle: -Math.PI / 2,
                fill: { color: "#bc8847" }
            });

            $('#circle-4').circleProgress({
                value: 0.75,
                size: 166,
                thickness: '15',
                startAngle: -Math.PI / 2,
                fill: { color: "#bc8847" }
            });

        });
    }
    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: [767, 1], // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        pagination: false
    });

    /*************** tabbing js *********/
    $("body").on("click", ".filter-btn-grp button", function() {

        $(".filter-content").removeClass("active");
        if ($(this).hasClass("filter-one-btn")) {
            $(".filter-content-one").addClass("active");
        } else {
            $(".filter-content-two").addClass("active");
        }
    });

    $('.filter-btn').on("click", function() {
        $(".filter-btn").removeClass("active-btn");
        $(this).addClass("active-btn");
    });

    jQuery('.play-video').on('click', function() {
        video1 = '<iframe src="' + jQuery('.video img').attr('data-video') + '"></iframe>';
        jQuery('.video img').after(video1);
        return false;
    });


    if ($('.fancybox-media').length) {
        $('.fancybox-media').fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            helpers: {
                media: {}
            }
        });
    }

    if ($('.progress-bar').length) {
        $('.progress-bar').appear(function() {
            $('.progress-bar').each(function() {
                var x = $(this).attr('aria-valuenow');
                $(this).css({
                    "width": x + '%'
                });
            });
        });
    }

    $('.fa-caret-right').on('click', function() {
        var value = $(this).parents('.pagination').find('input').val();
        value++;
        $(this).parents('.pagination').find('input').val(value);
    });

    $('.fa-caret-left').on('click', function() {
        var value = $(this).parents('.pagination').find('input').val();
        if (value > 0) {
            value--;
            $(this).parents('.pagination').find('input').val(value);
        }

    });


    if ($('.social-circle').length) {
        $('.social-circle').appear(function() {
            $('.follower-one').countTo({
                from: 0,
                to: 126804
            });

            $('.likes').countTo({
                from: 0,
                to: 86784
            });

            $('.follower-two').countTo({
                from: 0,
                to: 74589
            });
            $('.follower-three').countTo({
                from: 0,
                to: 15846
            });

        });

    }

    // $(window).load(function() {
    //     $("#loading").fadeOut(100);

});


//=================Header Style function================
if ($('#header').hasClass('fixed')) {
    $('#header').next().addClass('top-m');
}
if ($('#header').hasClass('intelligent')) {
    $('#header').next().addClass('top-m');
};

var class_pr = $('body').attr('class');
var headerHeight = $('#header').outerHeight();
var st = $(window).scrollTop();
stickOnScroll = function() {

    if ($('#header').hasClass("intelligent")) {

        $('#header').removeClass('normal');
        $('#header').next().addClass('top-m');
        var pos = $(window).scrollTop();

        if (pos > headerHeight) {
            if (pos > st) {
                $('#header').addClass('simple');
                $('#header.simple').removeClass('down');
                $('#header.simple').addClass('fixed up');

            } else {
                $('#header.simple').removeClass('up');
                $('#header.simple').addClass('fixed down');

            }
            st = pos;

        } else {
            $('#header.simple').removeClass('fixed down up simple');
        }
        if (pos == $(document).height() - $(window).height()) {
            $('#header.simple').removeClass('up');
            $('#header.simple').addClass('fixed down');
        }

    } else if ($('body').hasClass("fix")) {

        $('#header').next().addClass('top-m');
        $('#header').addClass('simple fixed');
        $('#header').removeClass('down up');
        $('#wrapper').css({
            paddingTop: 0
        });
    } else {

        $('#header.simple').removeClass('fixed down up simple');
        $('#header').addClass('normal');

        $('#wrapper').css({
            paddingTop: 0
        });
    }
};
stickOnScroll();
$(window).scroll(function() {
    stickOnScroll();
});
// end for sticky header