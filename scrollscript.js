$(function() {
	$('ul.naviagtion a').blind('click', function(event){
		var $anchor = $(this);
	})

	$('html', 'body').stop().animate({
		scrollleft: $($anchor.attr('href')).offset().left
	}, 1000);
	event.preventDefault();
	});
});

