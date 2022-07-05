// Slider

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

// Add red border in pricing section

const box = document.querySelectorAll(".box");

box.forEach((i) => {
	i.addEventListener("click", function () {
		box.forEach((el) => el.classList.remove("active"));
		this.classList.add("active");
	});
});
