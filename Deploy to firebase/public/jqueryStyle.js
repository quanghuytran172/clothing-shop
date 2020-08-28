$(document).ready(function(){
	if($(window).width() < 922 ){
		$('#dropdown-child').removeClass("child-hover");
		$(".list-clo").hide();
	}
	else{
		$('#dropdown-child').removeClass("child-dropdown");
		
	}


	$(window).resize(function(){
 		if(window.matchMedia('(max-width: 992px)').matches){
			$('#dropdown-child').removeClass("child-hover");
			$('#dropdown-child').addClass("child-dropdown");
			$(".list-clo").hide();
	}
		else{
			$('#dropdown-child').addClass("child-hover");
			$('#dropdown-child').removeClass("child-dropdown");
			$('a-fix').removeClass('a-fix1');
			$(".list-clo").show();
		}
	});
	$(".select-list span").click(function(){
		$("#dropdown-child").toggle();
		$('a-fix').addClass('a-fix1');
	})
	$(".categories").click(function(){
		$(".list-clo").slideToggle('slow');
	})
	$('.list-main i').click(function(){
		$(this).toggleClass('fas fa-plus fas fa-minus');
	})
	$('.icon-client .icon2').click(function(){
		$(this).toggleClass('fas fa-bars fas fa-times');
	})
	
})