/*
*	jquery.gooHeader.js
*	v.1.0
*	
*	JQuery plugin to make a fixed site header appear and disappear in a google-chrome-for-mobile-devices-like way
*
*/


(function($) {
	
	$.fn.gooHeader = function(options) {
		var defaults = {
			transition:300,
			easing:'ease-out'
		}
		
		var options =  $.extend(defaults, options);
		var elem = $(this);
		var elem_height = elem.outerHeight();
		var doc = $(window);
		var delta_state = false;
		var lastScrollTop = 0;
		
		elem.css({
			position:'fixed',
			left:0,
			right:0,
			top:0,
			'z-index':999,
			'-webkit-transition':'all '+options.easing+' '+options.transition+'ms',
			'-moz-transition':'all '+options.easing+' '+options.transition+'ms',
			'-ms-transition':'all '+options.easing+' '+options.transition+'ms',
			'-o-transition':'all '+options.easing+' '+options.transition+'ms',
			'transition':'all '+options.easing+' '+options.transition+'ms'
		});
		$('body').css({'padding-top':elem_height});

		function elem_move(e) {
			var top = doc.scrollTop();
			
			if (lastScrollTop > top){
				if(delta_state == false){
					delta_state = true;
					elem.css({top:0});
				}
			}else{
				delta_state = false;
				elem.css({top:-elem_height});
			}
			lastScrollTop = top;
		}
		
		doc
		.on('scroll', function(){
			elem_move();
		});
		
	}
	
})(jQuery);
