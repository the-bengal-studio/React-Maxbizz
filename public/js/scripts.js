(function( $ ) {
    "use strict";
    
    $('.woocommerce-form-coupon-toggle .showcoupon').on("click", function(){
        $(this).toggleClass( "active" );
        if ($(this).hasClass( "active" )) {
            $('.woocommerce-form-coupon').stop(true, true).slideDown();
        }else{
            $('.woocommerce-form-coupon').stop(true, true).slideUp();
        }
    });
    /* ========================================== 
	Sticky Header 1
	========================================== */
	$(window).on("scroll", function(){
		if ( $( '#site-header' ).hasClass( "sticky-header" ) ) {
			var site_header = $('#site-header').outerHeight() + 30;	
			
		    if ($(window).scrollTop() >= site_header) {	    	
		        $('.sticky-header .main-header, .mobile-header-sticky .header_mobile').addClass('is-stuck');	        
		    }else {
		        $('.sticky-header .main-header, .mobile-header-sticky .header_mobile').removeClass('is-stuck');		              
		    }
		}
	});

    /* ========================================== 
    Search on Header
    ========================================== */
    $('.toggle_search').on("click", function(){
        $(this).toggleClass( "active" );
        $('.h-search-form-field').toggleClass('show');
        if ($(this).find('i').hasClass( "ot-flaticon-search-1" )) {
            $('.toggle_search > i').removeClass( "ot-flaticon-search-1" ).addClass("ot-flaticon-cancel");
        }else{
            $('.toggle_search > i').removeClass( "ot-flaticon-cancel" ).addClass("ot-flaticon-search-1");
        }
        $('.h-search-form-inner > form > input.search-field').focus();
    });

    var element = $('#panel-btn'),
    sidebar = $('#side-panel');

    function panel_handler() {
        var isActive = !element.hasClass('active');

        element.toggleClass('active', isActive);
        sidebar.toggleClass('side-panel-open', isActive);
        $('body').toggleClass('side-panel-active', isActive);
        return false;
    }

    $('#panel-btn, .side-panel-close, .panel-overlay').on('click', panel_handler);
    /* ========================================== 
    Back To Top
    ========================================== */
    if ($('#back-to-top').length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        }); 
    }

    /* Counter */
    $(window).on('scroll', function() {
        $('.ot-counter').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });

        $('.ot-counter2').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
        
        $('.ot-progress').each(function() {
            var pos_y = $(this).offset().top;
            var value = $(this).find(".progress-bar").data('percent');
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find(".progress-bar").css({
                    'width': value
                }, "slow");
            }
        });

        $('.circle-progress:not([data-processed])').each(function() {
            var circle    = $(this),
                bar_color = circle.data('color'),
                bar_hei   = circle.data('height'),
                bar_size  = circle.data('size');
            var scrollTop = $(document).scrollTop() + $(window).height();
            if ( scrollTop >  circle.offset().top +  circle.height() ) {
                circle.attr("data-processed", "true");
                circle.find('.inner-bar').easyPieChart({
                    barColor: bar_color,
                    trackColor: false,
                    scaleColor: false,
                    lineCap: 'square',
                    lineWidth: bar_hei,
                    size: bar_size,
                    animate: 1000,
                    onStart: $.noop,
                    onStop: $.noop,
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent) + '%');
                    }
                });
            }
        });

        $('.line-progress:not([data-processed])').each(function() {
            var bar = $(this),
                line = bar.find(".progress-bar"),
                progressEnd = bar.data('percent'),
                percent = bar.find('.percent');
            var scrollTop = $(document).scrollTop() + $(window).height();

            if ( scrollTop >  bar.offset().top +  bar.height() ) {
                bar.attr("data-processed", "true");
                line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");

                for (var i = 0; i <= 50; i++) {
                    (function (count) {
                        setTimeout(function () {
                            percent.html(Math.round((progressEnd / 50) * count) + "%");
                        }, 30 * count);
                    })(i);
                }
            }
        });

        $('.line-progress[data-processed]').each(function () {
            var bar = $(this);
            var line = bar.find(".progress-bar");
            var progressEnd = parseInt(bar.data('percent'));

            line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");
        
        });
    });


    $('.ot-accordions').each( function () {
        var selector = $(this),
            content = selector.find('.acc-content'),
            header  = selector.find('.acc-toggle');

        header.off("click");

        header.each(function(){
            if ($(this).data('default') == 'yes') {
                $(this).next().addClass('active').slideDown(300);
                $(this).parent().addClass('current');
            }
        });

        header.on('click', function(e){
            e.preventDefault();
            var $this = $(this);

            $this.next().toggleClass('active').slideToggle(300);
            $this.parent().toggleClass('current');
            content.not($this.next()).slideUp(300);
            header.not($this).parent().removeClass('current');
        });
    });


    $('.ot-tabs').each(function() {
        $(this).find('.tabs-heading li').first().addClass('current');
        $(this).find('.tab-content').first().addClass('current');
    });

    $('.tabs-heading li').on( 'click', function(){
        var tab_id = $(this).attr('data-tab');
        $(this).siblings().removeClass('current');
        $(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    /* --------------------------------------------------
    * big tabs
    * --------------------------------------------------*/
    $('.tab-titles .title-item a').on( 'click', function(){
        $('.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.content-tab').hide();
        $($(this).attr('href')).show();

        return false;
    });
    $('.tab-titles .title-item:first a').trigger('click');

    $('.message-box > i').on( 'click', function() {
        $(this).parent().fadeOut();
    });

    $('.ot-countdown').each( function() {
        var date   = $(this).data('date'),
            zone   = $(this).data('zone'),
            day    = $(this).data('day'),
            days   = $(this).data('days'),
            hour   = $(this).data('hour'),
            hours  = $(this).data('hours'),
            min    = $(this).data('min'),
            mins   = $(this).data('mins'),
            second = $(this).data('second'),
            seconds = $(this).data('seconds');
        $(this).countdown({
            date: date,
            offset: zone,
            day: day,
            days: days,
            hour: hour,
            hours: hours,
            minute: min,
            minutes: mins,
            second: second,
            seconds: seconds
        }, function () {
            alert('Done!');
        });
    });


    /*Popup Video*/
    var $video_play = $('.btn-play');
    if ($video_play.length > 0 ) {
        $video_play.magnificPopup({
            type: 'iframe',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: true,
            callbacks: {
            beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
        });
    }

    
    
    $(".link-image-action").magnificPopup({
        type: "image"
    });

    /* --------------------------------------------------
    * background list
    * --------------------------------------------------*/

    $('.features-service-wrapper').each( function(){
        var selector = $(this),
            colHandle = selector.find('.features-service-item'),
            bgHandle = selector.find('.features-service-img');
        
            colHandle.each(function(){
                if ($(this).data('default') == 'yes') {
                    bgHandle.removeClass('hover');
                    $(this).next().addClass('hover');
                }
            });
           
                colHandle.hover(
                    function() {
                        bgHandle.removeClass('hover');
                        $(this).next().addClass('hover');
                    }
                );
            
            
    });

    $(window).load( function () {  
        var wraper = $('.features-service-wrapper');
        if(wraper.length){
            wraper.each(function () {
                var item = $(this).find('.features-service-item');
                    item.each(function () {
                        var desc = $(this).find('.features-service-desc'),
                            title = $(this).find('.features-service-title'),
                            width = $(window).width();

                        if (width > 1024){
                            var hdesc = desc.outerHeight(!0);
                            title.css({ transform: "translateY(" + hdesc + "px)" }),
                            $(this)
                                .mouseenter(function () {
                                    title.css({ transform: "translateY(0px)" });
                                })
                                .mouseleave(function () {
                                    title.css({ transform: "translateY(" + hdesc + "px)" });
                                });
                        }
                        else{
                            title.css("transform","");
                            $(this).unbind('mouseenter mouseleave');
                        }
                    });
            });
        }  
    });

    /*Portfolio Filter*/
    $(window).load( function () {
        if( $('#projects_grid').length > 0 ){
            var $container = $('#projects_grid'); 
            $container.isotope({ 
                itemSelector : '.project-item', 
                layoutMode : 'masonry'
            });

            var $optionSets = $('.project_filters'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.click(function(){
                var $this = $(this);

                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                    $optionSets.find('.selected').removeClass('selected');
                    $this.addClass('selected');

                var selector = $(this).attr('data-filter');
                    $container.isotope({ 
                        filter: selector 
                    });
                return false;
            });
        };    
    });


    
        // Initialize popup as usual
        $('.image-link').magnificPopup({ 
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below

            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function 

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
                }        
            },
            image: {
                // options for image content type
                titleSrc: 'title'
            },
            gallery: {
                // options for gallery
                enabled: true
            },
        });// JavaScript Document

    /* --------------------------------------------------
    * Client logo
    * --------------------------------------------------*/
    $('.logos-carousel').each( function () {
        var $this     = $(this),
            $loop     = $this.data('loop'),
            $auto     = $this.data('auto'),
            $time     = $this.data('time'),
            $dots     = $this.data('dots'),
            $nav      = $this.data('arrows'),
            $items    = $this.data('show') ? $this.data('show') : 2,
            $titems   = $this.data('tshow') ? $this.data('tshow') : 2,
            $mitems   = $this.data('mshow') ? $this.data('mshow') : 2,
            $gaps     = $this.data('gaps') !== '' ? $this.data('gaps') : 70,
            $tgaps    = $this.data('tgaps') !== '' ? $this.data('tgaps') : 50,
            $mgaps    = $this.data('mgaps') !== '' ? $this.data('mgaps') : 30,
            $selector = $this.find('.owl-carousel');
        $selector.owlCarousel({
            autoplay:$auto,
            autoplayTimeout: $time,
            loop:$loop,
            responsiveClass:true,
            dots:$dots,
            nav:$nav,
            navText:['<i class="ot-flaticon-left-arrow-2"></i>', '<i class="ot-flaticon-trajectory"></i>'],
            responsive : {
                0 : {
                    margin:$mgaps,
                    items:$mitems,
                },
                768 : {
                    margin:$tgaps,
                    items:$titems,
                },
                1024 : {
                    margin:$gaps,
                    items:$items,
                }
            }
        });
    });

    $('.ot-testimonials-carousel').each( function () {
        var $this     = $(this),
            $loop     = $this.data('loop'),
            $auto     = $this.data('auto'),
            $time     = $this.data('time'),
            $dots     = $this.data('dots'),
            $nav      = $this.data('arrows'),
            $items    = $this.data('show') ? $this.data('show') : 3,
            $titems   = $this.data('tshow') ? $this.data('tshow') : 2,
            $mitems   = $this.data('mshow') ? $this.data('mshow') : 1,
            $selector = $this.find('.owl-carousel');
        $selector.owlCarousel({
            autoplay:$auto,
            autoplayTimeout: $time,
            loop:$loop,
            responsiveClass:true,
            margin:30,
            dots:$dots,
            nav:$nav,
            navText:['<i class="ot-flaticon-left-arrow-2"></i>', '<i class="ot-flaticon-trajectory"></i>'],
            responsive : {
                0 : {
                    items:$mitems,
                },
                768 : {
                    items:$titems,
                },
                1024 : {
                    items:$items,
                }
            }
        });
    });

    $('.ot-testimonials-carousel-2').each( function () {
        var $this     = $(this),
            $loop     = $this.data('loop'),
            $auto     = $this.data('auto'),
            $time     = $this.data('time'),
            $dots     = $this.data('dots'),
            $nav      = $this.data('arrows'),
            $selector = $this.find('.owl-carousel');
        $selector.owlCarousel({
            autoplay:$auto,
            autoplayTimeout: $time,
            loop:$loop,
            responsiveClass:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:30,
            items:1,
            dots:$dots,
            nav:$nav,
            navText:['<i class="ot-flaticon-left-arrow-2"></i>', '<i class="ot-flaticon-trajectory"></i>'],
        });
    });

    $('.ot-team-carousel').each( function () {
        var $this     = $(this),
            $loop     = $this.data('loop'),
            $auto     = $this.data('auto'),
            $time     = $this.data('time'),
            $dots     = $this.data('dots'),
            $nav      = $this.data('arrows'),
            $items    = $this.data('show') ? $this.data('show') : 3,
            $titems   = $this.data('tshow') ? $this.data('tshow') : 2,
            $mitems   = $this.data('mshow') ? $this.data('mshow') : 1,
            $gaps     = $this.data('gaps') !== '' ? $this.data('gaps') : 30,
            $tgaps    = $this.data('tgaps') !== '' ? $this.data('tgaps') : 30,
            $mgaps    = $this.data('mgaps') !== '' ? $this.data('mgaps') : 30,
            $selector = $this.find('.owl-carousel');
        $selector.owlCarousel({
            autoplay:$auto,
            autoplayTimeout: $time,
            loop:$loop,
            responsiveClass:true,
            dots:$dots,
            nav:$nav,
            navText:['<i class="ot-flaticon-left-arrow-2"></i>', '<i class="ot-flaticon-trajectory"></i>'],
            responsive : {
                0 : {
                    margin:$mgaps,
                    items:$mitems,
                },
                768 : {
                    margin:$tgaps,
                    items:$titems,
                },
                1024 : {
                    margin:$gaps,
                    items:$items,
                }
            }
        });
    });

    function carouselOutside(){
        var otSliderOutside = $('.image-box-carousel.--outside, .image-box-custom-nav .--outside');
        if (otSliderOutside.length > 0 ) {
            otSliderOutside.each(function() {
                var screen_width = $(window).width();
                if ( screen_width > 1200 ) {                
                    var margin = screen_width - 1170;                
                } else {
                    var margin = 0;
                }
                $(this).css( 'margin-right', -margin/2 );
            });
        }
        return false;
    }

    var otOutside = function () {
        carouselOutside();
        $(window).on( 'resize', function() {
            carouselOutside();
        });
    };

    $('.image-box-carousel').each( function () {
        otOutside();
        var $this     = $(this),
            $loop     = $this.data('loop'),
            $auto     = $this.data('auto'),
            $time     = $this.data('time'),
            $dots     = $this.data('dots'),
            $nav      = $this.data('arrows'),
            $items    = $this.data('show') ? $this.data('show') : 3,
            $titems   = $this.data('tshow') ? $this.data('tshow') : 2,
            $mitems   = $this.data('mshow') ? $this.data('mshow') : 1,
            $gaps     = $this.data('gaps') !== '' ? $this.data('gaps') : 30,
            $tgaps    = $this.data('tgaps') !== '' ? $this.data('tgaps') : 30,
            $mgaps    = $this.data('mgaps') !== '' ? $this.data('mgaps') : 30,
            $selector = $this.find('.owl-carousel');
        $selector.owlCarousel({
            autoplay:$auto,
            autoplayTimeout: $time,
            loop:$loop,
            responsiveClass:true,
            dots:$dots,
            nav:$nav,
            navText:['<i class="ot-flaticon-left-arrow-2"></i>', '<i class="ot-flaticon-trajectory"></i>'],
            responsive : {
                0 : {
                    margin:$mgaps,
                    items:$mitems,
                },
                768 : {
                    margin:$tgaps,
                    items:$titems,
                },
                1024 : {
                    margin:$gaps,
                    items:$items,
                }
            }
        });
    });

    $('.project-slider').each( function () {
        var $this     = $(this),
            $loop     = $this.data('loop'),
            $auto     = $this.data('auto'),
            $time     = $this.data('time'),
            $center   = $this.data('center'),
            $dots     = $this.data('dots'),
            $nav      = $this.data('arrows'),
            $items    = $this.data('show') ? $this.data('show') : 2,
            $titems   = $this.data('tshow') ? $this.data('tshow') : 2,
            $mitems   = $this.data('mshow') ? $this.data('mshow') : 2,
            $gaps     = $this.data('gaps') !== '' ? $this.data('gaps') : 60,
            $tgaps    = $this.data('tgaps') !== '' ? $this.data('tgaps') : 40,
            $mgaps    = $this.data('mgaps') !== '' ? $this.data('mgaps') : 20,
            $selector = $this.find('.owl-carousel');
        $selector.owlCarousel({
            autoplay:$auto,
            autoplayTimeout: $time,
            center:$center,
            loop:$loop,
            responsiveClass:true,
            dots:$dots,
            nav:$nav,
            navText:['<i class="ot-flaticon-left-arrow-2"></i>', '<i class="ot-flaticon-trajectory"></i>'],
            responsive : {
                0 : {
                    margin:$mgaps,
                    items:$mitems,
                },
                768 : {
                    margin:$tgaps,
                    items:$titems,
                },
                1024 : {
                    margin:$gaps,
                    items:$items,
                }
            }
        });
    });

    $(document).ready( function() {
        function customNav(selector){
            var customNav   = selector.find('.custom-nav'),
                otOwl       = selector.find('.owl-carousel');
            if( customNav.length > 0 ){
                /* Go to the next item */
                customNav.find('.owl-next').on("click", function () {
                    otOwl.trigger('next.owl.carousel', [300]);
                });
                /* Go to the previous item */
                customNav.find('.owl-prev').on("click", function () {
                    otOwl.trigger('prev.owl.carousel', [300]);
                });  
            }
            return false;
        }

        $('.image-box-custom-nav').each( function () {
            otOutside();
            var 
                selector     = $(this),
                $loop     = selector.data('loop'),
                $auto     = selector.data('auto'),
                $time     = selector.data('time'),
                $dots     = selector.data('dots'),
                $nav      = selector.data('arrows'),
                $items    = selector.data('show') ? selector.data('show') : 3,
                $titems   = selector.data('tshow') ? selector.data('tshow') : 2,
                $mitems   = selector.data('mshow') ? selector.data('mshow') : 1,
                $gaps     = selector.data('gaps') !== '' ? selector.data('gaps') : 30,
                $tgaps    = selector.data('tgaps') !== '' ? selector.data('tgaps') : 30,
                $mgaps    = selector.data('mgaps') !== '' ? selector.data('mgaps') : 30;

            selector.find('.owl-carousel').owlCarousel({
                autoplay:$auto,
                autoplayTimeout: $time,
                loop:$loop,
                responsiveClass:true,
                dots:$dots,
                nav:$nav,
                navText:['<i class="ot-flaticon-left-arrow-2"></i>', '<i class="ot-flaticon-trajectory"></i>'],
                responsive : {
                    0 : {
                        margin:$mgaps,
                        items:$mitems,
                    },
                    768 : {
                        margin:$tgaps,
                        items:$titems,
                    },
                    1024 : {
                        margin:$gaps,
                        items:$items,
                    }
                }
            });
            customNav(selector);
        });
    });
    /* --------------------------------------------------
    * gallery post
    * --------------------------------------------------*/
    $('.gallery-post').each( function () {
        var selector = $(this);
        selector.owlCarousel({
            autoplay:true,
            autoplayTimeout: 6000,
            loop:true,
            margin:0,
            responsiveClass:true,
            items:1,
            dots:true,
            nav:false,
            navText:['<i class="ot-flaticon-left-arrow-2"></i>', '<i class="ot-flaticon-arrowsoutline"></i>']
        });
    });

    var swt = $('.ot-switcher').find('.switch input');
    $('.pricing-yearly').hide();
    swt.on( 'change', function() {
        var parent = $(this).parents('section');
        if(this.checked) {
            parent.find('.r-switch').addClass('active');
            parent.find('.l-switch').removeClass('active');
            parent.find('.pricing-monthly').hide();
            parent.find('.pricing-yearly').show();
        }else{
            parent.find('.l-switch').addClass('active');
            parent.find('.r-switch').removeClass('active');
            parent.find('.pricing-yearly').hide();
            parent.find('.pricing-monthly').show();
        }
    });

    $('.team-social > span').on('click', function(){
        $(this).parent().toggleClass('active');
    });
     
    $(window).load(function(){
    $('.projects-grid').each( function(){
        var $container = $(this); 
        $container.isotope({ 
            itemSelector : '.project-item', 
            animationEngine : 'css',
        });

        var $optionSets = $('.project_filters'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.on('click', function(){
            var $this = $(this);

            if ( $this.hasClass('selected') ) {
                return false;
            }
            var $optionSet = $this.parents('.project_filters');
                $optionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');

            var selector = $(this).attr('data-filter');
                $container.isotope({ 
                    filter: selector 
                });
            return false;
        });
    });
    });


})( jQuery );

