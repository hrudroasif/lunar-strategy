 $( document ).ready(function() {
    

	$('.hamburger').click(function(){
 		$('body').toggleClass('nav-show')
	})


	if($('.marketing-thum-wrap').length){
		$('.marketing-thum-wrap').slick({
			dots: false,
			arrows:false,
			autoplay:false,
			autoplaySpeed:5000,
			infinite: true,
			speed: 300,
			slidesToShow:1,
			slidesToScroll: 1,
		});
		}
	if($('.testimonial-description-wrap').length){
		$('.testimonial-description-wrap').slick({
			dots: false,
			arrows:false,
			autoplay:false,
			autoplaySpeed:5000,
			infinite: true,
			speed: 300,
			slidesToShow:1,
			slidesToScroll: 1,
		});
		}
		$(window).on('resize', function () {       
			$('.marketing-thum-wrap').slick('resize'); 
		});



 });

