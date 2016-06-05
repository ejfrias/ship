$(function(){
	
	// Arrow down
	$("a.jumper").click(function(e){
		var $this = $(this);
		
		$("html, body").animate({
			scrollTop: $( $this[0].getAttribute('href') ).offset().top + "px"
		}, {
			duration: 800,
			easing: "swing"
		});
		return false;
	});
	
	/* Welcome background */
	$(".welcome").backstretch("images/welcomebg.jpg");
	
	/* Countdown */
	var date = new Date();
	$('.countdown').countdown({
		date: 'Dec 31, ' + date.getFullYear() + ' 23:59:59',
		render: function( data ){
			$(this.el).html("<div>"  + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
		}
	});
	
	/* Center align welcome content */
	$(window).resize(function(){
		if( $(window).width() > 768 ){
			var content = $('.welcome-content'),
				cHeight = content.height(),
				cWidth = content.width(),
				wHeight	= $(window).height(),
				wWidth	= $(window).width(),
				vPos = ( (wHeight / 2) - (cHeight / 2) ) - 50,
				hPos = ( (wWidth / 2) - (cWidth / 2) );
			
			content.css({
				position: 'absolute',
				left: hPos + 'px',
				top: vPos + 'px'
			});
		}
	}).trigger('resize');
	
	/* Flickity */
	$('.slider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false,
		wrapAround: true
	});
});
