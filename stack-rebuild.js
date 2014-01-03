
// CLICK LAUNCH BUTTON -- SCROLL TO TOP CONTINUOUSLY
$('.scrollup').click(function(){
	$(".hide").css('display','block');
    $("html, body").animate({ scrollTop: 0 }, 40000);
	$(".scrollup").fadeOut();

});