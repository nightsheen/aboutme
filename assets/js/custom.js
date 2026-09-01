jQuery(document).ready(function () {
    // "use strict";

    /***************Preloader***************/

    window.addEventListener('load', function () {
        document.querySelector('body').classList.add("loaded")
    });

    /***************Slider for Testimonial***************/
    jQuery('.testimonial-content').slick({
        dots: true, infinite: false, speed: 500, slidesToShow: 3, slidesToScroll: 1, arrows: false, autoplay: true, responsive: [{
            breakpoint: 1440, settings: {
                slidesToShow: 2, slidesToScroll: 1,
            }
        }, {
            breakpoint: 1024, settings: {
                slidesToShow: 3, slidesToScroll: 1,
            }
        }, {
            breakpoint: 991, settings: {
                slidesToShow: 2, slidesToScroll: 1,
            }
        }, {
            breakpoint: 767, settings: {
                slidesToShow: 1, slidesToScroll: 1,
            }
        },]
    });

    /***************Slider for Project detail***************/

    jQuery('.project-img-row').slick({
        dots: false, infinite: true, speed: 500, slidesToShow: 2, slidesToScroll: 1, arrows: false, autoplay: true, responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 2, slidesToScroll: 1, infinite: true,
            }
        }, {
            breakpoint: 991, settings: {
                slidesToShow: 2, slidesToScroll: 1,
            }
        }, {
            breakpoint: 767, settings: {
                slidesToShow: 1, slidesToScroll: 1
            }
        }]
    });

    /***************Blog Slider***************/

    $('.blog-slider').slick({
        dots: false, infinite: true, speed: 300, slidesToShow: 1, margin: 10, autoplay: true, adaptiveHeight: true, nextArrow: '<svg enable-background="new 0 0 50 50" height="40" width="40" fill="#0C0C0C" class="next-arrow" id="Layer_1" version="1.1" viewBox="0 0 50 50"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><polygon points="15,2.75 12.914,4.836 33.078,25 12.914,45.164 15,47.25 37.25,25 "/></svg>', prevArrow: '<svg height="40" width="40" fill="#0C0C0C" class="prev-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/></g></svg>', responsive: [{
            breakpoint: 767, settings: {
                slidesToShow: 1, slidesToScroll: 1, infinite: true, arrows: false
            }
        },]
    });

    /***************Homepage Slider***************/

    jQuery('.home-slider').slick({
        dots: false, infinite: true, speed: 300, slidesToShow: 1, slidesToScroll: 1, arrows: false, autoplay: true, adaptiveHeight: true, responsive: [{
            breakpoint: 767, settings: {
                slidesToShow: 1, slidesToScroll: 1
            }
        }]
    });

    /***************Toggle Menu Script***************/

    $(document).on("click", function (event) {
        if ($(event.target).closest(".hamburger").length) {
            $(".muri-sidebar").toggleClass("open-menu");
            $('.close-line').toggleClass("is-active");
            $('.three.col').toggleClass("is-open");

        } else if (!$(event.target).closest(".hamburger").length) {
            $(".muri-sidebar").removeClass("open-menu");
            $(".close-line").removeClass("is-active");
            $('.three.col').removeClass("is-open");
        }
    })

    /*Image Slider PopUp*/

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image', mainClass: 'mfp-with-zoom', gallery: {
            enabled: true
        },

        zoom: {
            enabled: true, duration: 300, // duration of the effect, in milliseconds
            removalDelay: 300, easing: 'ease-in-out', // CSS transition easing function
            preloader: false,

            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /*Single Image PopUp*/

    $('.magnific-image').magnificPopup({
        type: "image", image: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</div>', cursor: 'mfp-zoom-out-cur', titleSrc: 'title', verticalFit: true, tError: '<a href="%url%">The image</a> could not be loaded.'
        }
    });

    /***************For About Us Counter Script***************/

    $(function () {
        function isScrolledIntoView($elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        function count($this) {
            var current = parseInt($this.html(), 10);
            if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
                $this.html(++current);
                $this.data("isCounting", true);
                setTimeout(function () {
                    $this.data("isCounting", false);
                    count($this);
                }, 10);
            }
        }

        $(".fact-counter span").each(function () {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            $(this).data("isCounting", false);
        });

        function startCount() {
            $(".fact-counter span").each(function () {
                count($(this));
            });
        };

        $(window).scroll(function () {
            startCount();
        });

        startCount();
    });

    /***************For Progress Bar Script***************/

    $(".animated-progress span").each(function () {
        $(this).animate({
            width: $(this).attr("data-progress") + "%",
        }, 1000);
    });

    /***************Sticky Header***************/

    $(window).scroll(function () {
        var sticky = $('.muri-resp-header'), scroll = $(window).scrollTop();

        if (scroll >= 40) {
            sticky.addClass('sticky');
        } else {
            sticky.removeClass('sticky');
        }
    });

    /***************Mouse Effect***************/

    let mouseCursor = document.querySelector('.cursor');
    let links = document.querySelectorAll('a');
    ;

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        gsap.to(mouseCursor, 0.4, {
            x: e.clientX, y: e.clientY
        });
    }

    links.forEach(link => {
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
            gsap.to(mouseCursor, 0.4, {
                scale: 1
            });
        });

        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            gsap.to(mouseCursor, 0.4, {
                scale: 2
            });
        });
    });
});