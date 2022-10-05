(function($){

	jQuery(document).ready(function(){

        /*** Sticky header */
		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".header").addClass("stop");
			} else {
				$(".header").removeClass("stop");
			}
		});

		/*** Sticky header */
		const body = document.body;
		const scrollUp = "scroll-up";
		const scrollDown = "scroll-down";
		let lastScroll = 100;

		window.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll <= 0) 
			{
				body.classList.remove(scrollUp);
				return;
			}

			if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
			{
				// down
				body.classList.remove(scrollUp);
				body.classList.add(scrollDown);
			} 
			else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
			{
				// up
				body.classList.remove(scrollDown);
				body.classList.add(scrollUp);
			}

			lastScroll = currentScroll;
		});

		/*** Scroll Nav */
		var link = $('.main-menu ul li a');
 
		link.on('click', function(e) {
			var target = $($(this).attr('href'));
			$('html, body').animate({
			scrollTop: target.offset().top - 76
			}, 600); 
			$(this).parent().addClass('active');
			e.preventDefault();
		});
 
		$(window).on('scroll', function(){
			scrNav();
		});

		function scrNav() {
			var sTop = $(window).scrollTop();
			$('section').each(function() {
				var id = $(this).attr('id'),
					offset = $(this).offset().top-1,
					height = $(this).height();
				if(sTop >= offset && sTop < offset + height) {
					link.parent().removeClass('active');
					$('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
				}
			});
		}
		scrNav();

		/*** mobile menu  */
		$(".hamburger-menu").on("click", function () {
			$(".side-info").toggleClass("info-open");
			$(".offcanvas-overlay").toggleClass("overlay-open");
		});

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".side-info").removeClass("info-open");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});

        /*** AOS */
		AOS.init({
			once: true,
			offset: 0,
			duration: 900,
		});

		/*** enable lightbox */
		$('.popup-video').magnificPopup({
			type: 'iframe',
			preloader: false,
			fixedBgPos: true,
			removalDelay: 500,
			fixedContentPos: true,
			callbacks: {
				beforeOpen: function() { 
					this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
		});
    	
        // testimonial-active 
        var testimonials__slider;
        testimonials__slider = $('.testimonial-area__slider');

        testimonials__slider.slick({
            dots: true, 
            speed: 300,
            arrows: true,
            autoplay: true,
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 1,
            autoplaySpeed: 500,
            dotsClass: "slick-dots list-inline",
            nextArrow: '<button class="slide-arrow prev-arrow fa-solid fa-arrow-right-long"></button>',
            prevArrow: '<button class="slide-arrow next-arrow fa-solid fa-arrow-left-long"></button>',
            appendDots: $(".slider-controls"),
            responsive: [
            {
                breakpoint: 768,
                settings: {
                 slidesToShow: 2
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1
                }
            }
            ]
        }); 

        /** counter **/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

	});

}(jQuery));