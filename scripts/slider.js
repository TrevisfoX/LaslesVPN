$(document).ready(function () {
	$(".slider").slick({
		arrows: true,
		dots: false,
		slidesToShow: 2,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
});

