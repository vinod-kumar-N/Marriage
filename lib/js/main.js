$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $("[data-fancybox]").fancybox({
		// Options will go here
	});
    var height = $('.commonLeft').height() - 25;
    $('.commonBorder.second').css('height',height);
})