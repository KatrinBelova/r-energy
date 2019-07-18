import $ from 'jquery';
import AOS from 'aos';


$(document).ready(function(){

	var $slider = $('#slider-slick');

		var currentSlide;
		var slidesCount;
		var sliderCounter = document.createElement('li');
		sliderCounter.classList.add('slider__counter');
		
		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).text(currentSlide + '/' +slidesCount)
		};

		$slider.on('init', function(event, slick) {
			var $dots = $('.slick-dots');

			$dots.append(sliderCounter);
			updateSliderCounter(slick);

			AOS.init({
			  // disable: 'mobile'
			});
		});

		$slider.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);

				AOS.refreshHard();
		});

		$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){

				AOS.refreshHard();
		});

	if ($slider.length) {
		$slider.slick({

			dots: true,
			autoplay: true,
			autoplaySpeed: 5000,
		});
	}

});