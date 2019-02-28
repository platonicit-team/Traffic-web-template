window.onscroll = function(){
	scrollFunction();
}
function scrollFunction(){
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.getElementById("myNave").classList.add("navbar-py-remove");
		document.getElementById("myNave").classList.add("nav-shadow");
	}
	else{
		document.getElementById("myNave").classList.remove("navbar-py-remove");
		document.getElementById("myNave").classList.remove("nav-shadow");

	}
}
// jQuery

// Preloader
$(window).on('load',function(){
  $('.loading-screen').fadeOut(1000);
})
// Ready function
$(document).ready(function(){
	// Scrolling effect
	$(".nav-item>a, .navbar-brand").click(function(){
	    var target = $(this).attr("href");
	    $("html, body").stop().animate({
	        scrollTop : $(target).offset().top
	    },700)

	});

	// Click to hide nav
	$(".nav-link").click(function(){
    	$(".navbar-toggler").addClass("collapsed");
    	$(".navbar-collapse").removeClass("show");
    })
    // Slider
	
    $('.owl-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
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
})
// Animation
new WOW({ mobile: true }).init();
