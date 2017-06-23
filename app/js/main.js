function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

function countdown() {
	// Дата
	var countDownDate = new Date("May 22, 2017 12:00:00").getTime();

	// Оновлення через кожну секунду
	var x = setInterval(function() {

	  	var now = new Date().getTime();

	  	var distance = countDownDate - now;

	  	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  	// document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	  	document.getElementById("days-value").innerHTML = pad(days, 2);
	  	document.getElementById("hours-value").innerHTML = pad(hours, 2);
	  	document.getElementById("minutes-value").innerHTML = pad(minutes, 2);
	  	document.getElementById("seconds-value").innerHTML = pad(seconds, 2);

	  	// Якщо дата настала
	  	if (distance < 0) {
	    	clearInterval(x);
	    	document.getElementById("days-value").innerHTML = "00";
	  		document.getElementById("hours-value").innerHTML = "00";
	  		document.getElementById("minutes-value").innerHTML = "00";
	  		document.getElementById("seconds-value").innerHTML = "00";
	  	}
	}, 1000);
}

function sliderInit() {
	var slider = $(".slider_block");

	slider.owlCarousel({
	  	items : 3,
	  	nav : false,
	    pagination : true,
	  	addClassActive : true,
	    loop : true,
	    center : true,
	    stagePadding : 0,
  	});

	slider.trigger('refresh.owl.carousel');
}

function sliderInitNav() {
	var slider = $(".slider_block");
	$('#screenshots-slider .prev').click(function() {
	    slider.trigger('prev.owl.carousel');
	});
	$('#screenshots-slider .next').click(function() {
	    slider.trigger('next.owl.carousel');
	});
}

$( document ).ready(function() {
	countdown();
	var mobile_menu = false;
	$(".burger_btn").click(function(e) {
	  e.preventDefault();
	  if (mobile_menu == false){
	  	$("#nav_bar ul").css('display', 'block');
        $("body").css('overflow', 'hidden');
	  	mobile_menu = true;
	  } else {
	  	$("#nav_bar ul").css('display', 'none');
        $("body").css('overflow', 'auto');
	  	mobile_menu = false;
	  }
	});
	$(".menu_close").click(function(e) {
		if (mobile_menu == true){
	  		$("#nav_bar ul").css('display', 'none');
            $("body").css('overflow', 'auto');
	  		mobile_menu = false;
	  	}
	});
	sliderInit();
    sliderInitNav();
});

// Анімації

$('#header').waypoint(function() {
    setTimeout(function(){
    	$('#nav_bar').addClass('animated fadeInDown');
    	$('#nav_bar').css('opacity','1');
    }, 10);
    setTimeout(function(){
    	$('#header .header_content').addClass('animated slideInLeft');
    	$('#header .header_content').css('opacity','1');
    }, 500);
    setTimeout(function(){
    	$('#header .phone img').addClass('animated slideInUp');
    	$('#header .phone img').css('opacity','1');
    }, 700);
}, { offset: '50%' });

$('#interface').waypoint(function() {
    setTimeout(function(){
    	$('#interface .tablet_img').addClass('animated slideInUp');
    	$('#interface .tablet_img').css('opacity','1');
    }, 10);
    setTimeout(function(){
    	$('#interface .tablets h2').addClass('animated slideInRight');
    	$('#interface .tablets h2').css('opacity','1');
    }, 500);
    setTimeout(function(){
    	$('#interface .tablets p').addClass('animated slideInUp');
    	$('#interface .tablets p').css('opacity','1');
    }, 700);
}, { offset: '50%' });

$('#desktop').waypoint(function() {
    setTimeout(function(){
    	$('#desktop .imac_img').addClass('animated slideInRight');
    	$('#desktop .imac_img').css('opacity','1');
    }, 10);
    setTimeout(function(){
    	$('#desktop .tablets h2').addClass('animated slideInLeft');
    	$('#desktop .tablets h2').css('opacity','1');
    }, 500);
    setTimeout(function(){
    	$('#desktop .tablets p').addClass('animated zoomIn');
    	$('#desktop .tablets p').css('opacity','1');
    }, 700);
}, { offset: '50%' });

$('#workspaces').waypoint(function() {
    setTimeout(function(){
    	$('#workspaces .workspaces_wrapper').addClass('animated zoomIn');
    	$('#workspaces .workspaces_wrapper').css('opacity','1');
    }, 10);
}, { offset: '50%' });

$('#how').waypoint(function() {
    setTimeout(function(){
    	$('#how .how_wrapper h2').addClass('animated zoomInUp');
    	$('#how .how_wrapper h2').css('opacity','1');
    }, 10);
    setTimeout(function(){
    	$('#how .how_wrapper .step.step_left').addClass('animated slideInLeft');
    	$('#how .how_wrapper .step.step_left').css('opacity','1');
    }, 500);
    setTimeout(function(){
    	$('#how .how_wrapper .step.step_right').addClass('animated slideInRight');
    	$('#how .how_wrapper .step.step_right').css('opacity','1');
    }, 700);
}, { offset: '50%' });

$('#features').waypoint(function() {
    setTimeout(function(){
    	$('#features .features_wrapper h2').addClass('animated zoomInUp');
    	$('#features .features_wrapper h2').css('opacity','1');
    }, 10);
    setTimeout(function(){
    	$('#features .features_wrapper .left').addClass('animated slideInLeft');
    	$('#features .features_wrapper .left').css('opacity','1');
    }, 500);
    setTimeout(function(){
    	$('#features .features_wrapper .right').addClass('animated slideInRight');
    	$('#features .features_wrapper .right').css('opacity','1');
    }, 500);
    setTimeout(function(){
    	$('#features .features_wrapper .phone_center').addClass('animated slideInUp');
    	$('#features .features_wrapper .phone_center').css('opacity','1');
    }, 700);
}, { offset: '50%' });

$('#mobile').waypoint(function() {
    setTimeout(function(){
    	$('#mobile .mobile_wrapper').addClass('animated zoomIn');
    	$('#mobile .mobile_wrapper').css('opacity','1');
    }, 10);
}, { offset: '50%' });

$('#screenshots').waypoint(function() {
    setTimeout(function(){
    	$('#screenshots h2').addClass('animated zoomInUp');
    	$('#screenshots h2').css('opacity','1');
    }, 10);
    setTimeout(function(){
    	$('#screenshots h4').addClass('animated slideInLeft');
    	$('#screenshots h4').css('opacity','1');
    }, 500);
    setTimeout(function(){
    	$('#screenshots p').addClass('animated slideInLeft');
    	$('#screenshots p').css('opacity','1');
    }, 700);
    setTimeout(function(){
    	$('#screenshots-slider').addClass('animated slideInRight');
    	$('#screenshots-slider').css('opacity','1');
    }, 900);
}, { offset: '50%' });

$('#linux').waypoint(function() {
    setTimeout(function(){
    	$('#linux .linux_wrapper').addClass('animated zoomIn');
    	$('#linux .linux_wrapper').css('opacity','1');
    }, 10);
}, { offset: '50%' });