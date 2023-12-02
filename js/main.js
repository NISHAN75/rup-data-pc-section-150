(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel
$('.homepage-sliders').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	nav:true,
	navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
	dots:false,
  
});

var homePageSlider = $(".homepage-slider-2");

homePageSlider.owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  nav: true,
  navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
  dots: true,
});

homePageSlider.on('translated.owl.carousel', function (event) {
  // Remove the class from all elements with the same selector
  $(".owl-item .welcome-area-text h4").removeClass("bounceIn animated");
  $(".owl-item .welcome-area-text h1").removeClass("fadeInUp  animated");
  $(".owl-item .welcome-area-text p").removeClass("fadeInUp  animated");

  // Add the class to the current active element
  $(".owl-item.active .welcome-area-text h4").addClass("bounceIn  animated");
  $(".owl-item.active .welcome-area-text h1").addClass("fadeInUp  animated");
  $(".owl-item.active .welcome-area-text p").addClass("fadeInUp  animated");
});

// owlCarousel
$('.product-carousel').owlCarousel({
    loop:true,
    margin:20,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:4
        }
    }
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false,
	iframe: {
	  patterns: {
		youtube: {
		  index: 'youtube.com/',
		  id: 'v=',
		  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
		}
	  }
	}
  });

// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// fliter active isotop
$('.protfolio-fliter').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$('.protfolio-list').isotope({ 
		filter: filterValue ,
		transitionDuration: '0.8s'
	});
	$(".protfolio-fliter button").removeClass('active');
	$(this).addClass('active');
  });


//   masonary active isotop
  $('.protfolio-list').isotope({
	itemSelector: '.single-protfolio-item',
		percentPosition: true,
		masonry: {
		  columnWidth: '.single-protfolio-item',
		  horizontalOrder:true,
		}
  });



// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// masonary 
$('.protfolio-list').masonry({
	horizontalOrder: true,
});
// background Video active
$('.background-video').YTPlayer({});
// flitering  active










new PerfectScrollbar('#demo', {

    // A list of handlers to scroll the element.
    handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],

    // This sets threshold for ps--scrolling-x and ps--scrolling-y classes to remain. In the default CSS, they make scrollbars shown regardless of hover state. The unit is millisecond.
    scrollingThreshold: 1000,

    // The scroll speed applied to mousewheel event.
    wheelSpeed: 1,

    // If true, when the scroll reaches the end of the side, 
    // mousewheel event will be propagated to parent element.
    wheelPropagation: false, 

    // When set to an integer value, the thumb part of the scrollbar
    // will not shrink below that number of pixels.
    minScrollbarLength: null,

    // When set to an integer value, the thumb part of the scrollbar 
    // will not expand over that number of pixels.
    maxScrollbarLength: null, 

    // When set to true, and only one (vertical or horizontal) scrollbar
    // is visible then both vertical and horizontal scrolling will affect the scrollbar.
    useBothWheelAxes: false, 

    // When set to true, the scroll bar in X axis will not be available, 
    // regardless of the content width.
    suppressScrollX: false, 

    // When set to true, the scroll bar in Y axis will not be available, 
    // regardless of the content height.
    suppressScrollY: false, 

    // true: swipe scrolling will be eased
    swipeEasing: true,

    // The number of pixels the content width can surpass the 
    // container width without enabling the X axis scroll bar. 
    scrollXMarginOffset: 0, 

    // The number of pixels the content height can surpass the 
    // container height without enabling the Y axis scroll bar. 
    scrollYMarginOffset: 0

});
// WOW active
new WOW().init();


})(jQuery);


