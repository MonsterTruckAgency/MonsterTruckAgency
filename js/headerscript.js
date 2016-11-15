/*jslint devel: true, sloppy: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
	//********* MENU PROJECT HOVER ******* //
	//** REMOVES HOVER AND CLICK WHEN PROJECT MENU IS HIDDEN**/
	$('#hovera').mouseenter(function () {
		$('.projectmenu').addClass('menuopen');
	});
	$('.projectmenu').mouseleave(function () {
		console.log("leave");
		$('.projectmenu').removeClass('menuopen');
	});
	$(document).mousemove(function (event) {
		var coordaleft = $('#hovera').offset().left;
		var coordaright = $('#hovera').offset().left + $('#hovera').outerWidth();
		if ((event.pageX < coordaleft) || (event.pageX > coordaright)) {
			$('.projectmenu').removeClass('menuopen');
		}
	});
	$('.projectmenu a').click(function () {
		
		$('.projectmenu').removeClass('menuopen');
	});
	$('.accordion').click(function () {
		$('.accordiontarget').toggleClass('accordionopen');
		$('.accordionmove').toggleClass('move');
	});
	$('#button').click(function () {
		var mo = $('body').css('overflow');
		console.log(mo);
		if ( mo === "hidden"){ 
			alert();
			$('body').css('overflow','visible');}
			else {$('body').css('overflow','hidden');}
		
		$('.nav').toggleClass('navopen');
		$('#main').toggleClass('animatemain');
	});
	var mobilenavlinks = $('#headermobile li a');
	mobilenavlinks.click(function (event) {
		var targ = $(event.target);
		console.log(targ);
		if (targ.hasClass('accordion')) {}
		else if (targ.not('.accordion')) {
			$('body').css('overflow','visible');
			$('#main').removeClass('animatemain');
			$('.nav').toggleClass('navopen');
		}
	});
	$('#homelogo a').click(function () {
		$('#main').removeClass('animatemain');
		$('.nav').removeClass('navopen');
	});
	$('.accordion').click(function () {
		$('#main').toggleClass('movebottom');
	});
});