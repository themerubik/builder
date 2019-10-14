(function($) {
	'use strict';
	// Offset start //
	var html_body = $('html, body'),
		nav = $('nav'),
		navOffset = nav.offset().top,
		$window = $(window);
	$('nav a').on('click', function() {
		if(location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 30
				}, 1500);
				return false;
			}
		}
	});
	//navbar fixed js //
	$window.on('scroll', function() {
		var scrollPos = $window.scrollTop();
		if(scrollPos > navOffset) {
			$('nav').addClass('navbar-fixed');
		} else {
			$('nav').removeClass('navbar-fixed');
		}
	});
	//scrollspy menu //
	$('body').scrollspy({
		target: '#navbarSupportedContent',
		offset: 80
	});
	//preloader//
	$(window).load(function() {
		$(".loader").delay(2000).fadeOut("slow");
		$("#overlayer").delay(2000).fadeOut("slow");
	});
	// background image//
	$(document).on('ready', function() {
		background();
	});

	function background() {
		var img = $('.bg_img');
		img.css('background-image', function() {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}
	// banner Slider//
	$(".homepage-slides").owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		autoplay: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></>"],
		loop: true,
		animateOut: 'fadeOut'
	});
	// project Slider//
		$(".protfolio-items").owlCarousel({
	   				items:5,
	   				loop: true,
	   				nav: true,
	   				navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></>"],
	   				autoplay: true,
	   				autoplayTimeout: 1000,
	   				dots : true,
	   				autoplayHoverPause: true,
					  responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
	   	});
		// testimonial Slider//
	$('.testimoinal-wrapper').owlCarousel({
			loop:true,
			nav:false,
			autoplay:true,
			autoplayHoverPause: true,
			mouseDrag: true,
			margin: 30,
			center: true,
			dots: false,
			smartSpeed:1500,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
		// client carousel
	$('.clients').owlCarousel({
	    loop:true,
	    margin:30,
	    smartSpeed: 800,
	    nav: false,
	    dots: false,
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items: 1
	        },
	        576:{
	            items: 2
	        },
	        768:{
	            items: 3
	        },
	        992:{
	            items:4
	        }
	    }
	});

	
	
	//materialScrollTop//
	$('body').materialScrollTop({
		revealElement: 'header',
		revealPosition: 'bottom',
		onScrollEnd: function() {
			console.log('Scrolling End');
		}
	});
})(jQuery);