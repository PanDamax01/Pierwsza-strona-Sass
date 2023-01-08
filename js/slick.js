$('.team-carousel').slick({
	arrows: false,
	// autoplay: true,
	autoplaySpeed: 3000,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
			},
		},
	],
})
