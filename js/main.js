$(document).ready(function (event) {
	$('.carousel').carousel()
	$(".h1 span").click(function(event){
		$(".menu-warp").addClass("menu-slide");
	});
	$(".menu-warp div:nth-child(1) span").click(function(event){
		$(".menu-warp").removeClass("menu-slide");
	});

	$("a[data-panel]").click(function(event){
		event.preventDefault();
		if($(window).width() > 769)
			$(".content-wrap").empty().html($($(this).attr("data-panel")).html());
		else{
			if (typeof $(this).attr('data-parent') !== typeof undefined && $(this).attr('data-parent') !== false) {
				$($(this).attr("href")).toggleClass('hide');
			}
			$($(this).attr("data-panel")).slideToggle();
		}
	});
	$(".feedback-form i").click(function(event) {
		if($(this).hasClass('glyphicon-resize-full')){
			$(this).removeClass('glyphicon-resize-full').addClass('glyphicon-resize-small');
		}
		else{
			$(this).removeClass('glyphicon-resize-small').addClass('glyphicon-resize-full');
		}
		$(this).closest('.feedback-form').toggleClass('maximize');
	});
});