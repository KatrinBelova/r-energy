import $ from 'jquery';

$(document).ready(function(){
	// Burger
	let menu = $('.icon-menu');
	let close = $('.icon-close');

	// get scrollbar width
	var scrollBarWidth = (window.innerWidth-$(window).width());

	menu.on('click', function() {
		$('html').css('overflow','hidden');
		$('.top-bar').css('margin-right', scrollBarWidth + 'px');
		$('.top-bar__nav').addClass('expanded');
		menu.addClass('hidden');
		close.removeClass('hidden');
	})

	close.on('click', function() {
		$('html').css('overflow','auto');
		$('.top-bar').css('margin-right', '0');
		$('.top-bar__nav').removeClass('expanded');
		menu.removeClass('hidden');
		close.addClass('hidden');
	})

	// Submenu accordion
	var allPanels = $('.has-submenu > .submenu');

	var submenuHandle = function (e) {
		console.log('hi');
		var $this = $(e.currentTarget);
		if ($this.hasClass('show')) {
			$this.removeClass('show');
			$this.find('.submenu').slideUp(350);
		} else {
			allPanels.parent().removeClass('show');
			allPanels.slideUp();
			$this.addClass('show');
			$this.find('.submenu').slideDown();
		}
	};

	$('.has-submenu').on('click', (e) => {
		if ($(window).innerWidth() <= 1200) {
			submenuHandle(e)
		}
		return false
	});

	if ($(window).innerWidth() < 1200) {
		allPanels.hide();
	}

	$(window).resize(function() {
			if ($(this).width() >= 1200) {
				allPanels.show();
			} else {
				allPanels.hide();
			}
	})
});
