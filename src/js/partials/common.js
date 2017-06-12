//init owlcarousel on blog section
;$(document).ready(function(){
	$(".slider").owlCarousel({
		nav: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		items: 1,
		dots: true,
		loop:true,
	});

	$(".feedback__slider").owlCarousel({
		nav: false,
		items: 1,
		dots: true,
		loop: true
	});

$(".sidebar__a").click(function(event) {
            event.preventDefault(); 

            var defaultAnchorOffset = 0;

            var $anchor = $(this).attr('data-scroll');
            console.log($anchor)
            var anchorOffset = $($anchor).attr('data-scroll-offset');
            if (!anchorOffset)
                anchorOffset = defaultAnchorOffset; 

            $('html,body').animate({ 
                scrollTop: $($anchor).offset().top - anchorOffset
            }, 500);        
        });

});

$(window).on('load', function () {
	$('.preloader').delay(1000).fadeOut('slow');
});