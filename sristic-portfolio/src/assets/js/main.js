(function ($) {
    "use strict";

    /*****************************
     * Commons Variables
     *****************************/
    var $window = $(window),
        $body = $('body');

    /****************************
     * Sticky Menu
     *****************************/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

    /*****************************
     * Off Canvas Function
     *****************************/
    function initOffCanvas() {
        var $offCanvasToggle = $('.offcanvas-toggle'),
            $offCanvas = $('.offcanvas'),
            $offCanvasOverlay = $('.offcanvas-overlay'),
            $mobileMenuToggle = $('.mobile-menu-toggle');

        $offCanvasToggle.off('click').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr('href');
            $body.addClass('offcanvas-open');
            $($target).addClass('offcanvas-open');
            $offCanvasOverlay.fadeIn();
        });

        $('.offcanvas-close, .offcanvas-overlay').off('click').on('click', function (e) {
            e.preventDefault();
            $body.removeClass('offcanvas-open');
            $offCanvas.removeClass('offcanvas-open');
            $offCanvasOverlay.fadeOut();
        });
    }

    // Counter Animation - Works with Angular Components
    function initCounterUp() {
        if ($.fn.counterUp) {
            $(".counter:not(.counter-initialized)").each(function () {
                $(this).counterUp({
                    delay: 10,
                    time: 1000
                });
                $(this).addClass("counter-initialized"); // Prevents multiple initializations
            });
        }
    }


    /****************************************
     *   Initialize Swiper Sliders
     *****************************************/
    function initAllSliders() {
        /****************************************
         *   Service Slider (NO Navigation, Only Pagination)
         *****************************************/
        $(".service-display-slider .swiper-container").each(function () {
            if (!$(this).hasClass("swiper-initialized")) {
                new Swiper(this, {
                    slidesPerView: 3,
                    speed: 1500,
                    loop: true,
                    spaceBetween: 45,
                    pagination: {
                        el: $(this).closest(".service-display-wrapper").find(".service-display-dots .swiper-pagination")[0],
                        clickable: true,
                    },
                    breakpoints: {
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }
                });
                $(this).addClass("swiper-initialized");
            }
        });


        /****************************************
         *   Testimonial Slider (Fixed Navigation)
         *****************************************/
        $(".testimonial-display-slider .swiper-container").each(function () {
            if (!$(this).hasClass("swiper-initialized")) {
                new Swiper(this, {
                    slidesPerView: 2,
                    loop: true,
                    navigation: {
                        nextEl: $(this).closest(".testimonial-display-section").find(".default-nav-style .button-next")[0],
                        prevEl: $(this).closest(".testimonial-display-section").find(".default-nav-style .button-prev")[0],
                    },
                    breakpoints: {
                        0: { slidesPerView: 1 },
                        992: { spaceBetween: 80, slidesPerView: 2 },
                        1200: { spaceBetween: 100 },
                        1400: { spaceBetween: 150 },
                        1800: { spaceBetween: 175 },
                    }
                });
                $(this).addClass("swiper-initialized");
            }
        });

        /* Company Logo Slider */
        $(".company-logo-display-slider .swiper-container").each(function () {
            if (!$(this).hasClass("swiper-initialized")) {
                new Swiper(this, {
                    slidesPerView: 4,
                    loop: true,
                    breakpoints: {
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2, spaceBetween: 50 },
                        576: { slidesPerView: 2, spaceBetween: 50 },
                        768: { slidesPerView: 3, spaceBetween: 50 },
                        992: { slidesPerView: 3, spaceBetween: 60 },
                        1200: { slidesPerView: 4, spaceBetween: 85 },
                    }
                });
                $(this).addClass("swiper-initialized");
            }
        });
    }

    /****************************************
     *   Function to Reinitialize UI Components
     *****************************************/
    function reinitializeUI() {
        // Reinitialize off-canvas menu
        initOffCanvas();

        // Reinitialize all sliders
        initAllSliders();

        // Counter Animation
        initCounterUp();

        // Video Popup
        // if ($.fn.venobox) {
        //     $('.wave-btn').venobox();
        // }

        // Project Filter
        if ($.fn.imagesLoaded && $.fn.isotope) {
            $('.projects-wrapper-gallery-content').imagesLoaded(function () {
                var $grid = $('.projects-wrapper-gallery-content').isotope({
                    itemSelector: '.filter-item',
                    percentPosition: true,
                });

                $('.projects-gallery-filter-nav').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({ filter: filterValue });

                    $(this).siblings('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        }

        // Progress Bar Animation
        if ($.fn.appear) {
            $('.progress-line').appear(function () {
                var el = $(this);
                var percent = el.data('width');
                $(el).css('width', percent + '%');
            }, { accY: 0 });
        }

        // Scroll to Top
        $('body').materialScrollTop();
    }

    /****************************************
     *   Detect New Angular Components and Reinitialize
     *****************************************/
    let observerTimeout;
    var observer = new MutationObserver(function () {
        clearTimeout(observerTimeout);
        observerTimeout = setTimeout(() => {
            reinitializeUI();
        }, 300);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    /****************************************
     *   Run Everything on Initial Page Load
     *****************************************/
    $(document).ready(function () {
        reinitializeUI();
    });
})(jQuery);
