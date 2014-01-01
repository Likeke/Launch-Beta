
(function () {
    var previousScroll = 0;

    $(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
       if (currentScroll > previousScroll){
           window.scrollDirection = false;
       } else {
          window.scrollDirection = true;
       }
       previousScroll = currentScroll;
    });
}()); //run this anonymous function immediately


	

$(document).ready(function() {
	var windowSize = $(window).height();
	var windowWidth = $(window).width();
	var sectionHeight = $("#section").height();
	//console.log(windowSize);
	$('.nativeLogoHeader').css('height', windowSize);
	$('.nativeLogoHeader img').css('margin-top', windowSize/2.7);
	var aa = 1;
	
	
	
	$(function(){
	    var win = $(window);
	    
	    
	    
	    win.scroll(function(e){
	    	
	    
	        var scrollTop = win.scrollTop();
	        var bgpos = 0.05 * scrollTop;
	        var headersize = $('.nativeLogoHeader').height();

			//console.log('scroll top position = ' + scrollTop);//current scroll position of the top of the viewport in the document 

			/*=========================8============================*/
			if (scrollTop >= 500) {
				$('.moon').css('left', -200);

			}
			if (scrollTop <= 500) {
				$('.moon').css('left', windowWidth-500);
			}
			/*=========================7============================*/
			if (scrollTop >= 700) {
				$('.meteor').css('right', -200);
				$('.meteor').css('margin-top', 300);

			}
			if (scrollTop <= 701) {
				$('.meteor').css('right', windowWidth+200);
			}
			
			/*=========================6============================*/
			/*=========================5============================*/
			/*=========================4============================*/
			if (scrollTop <= 3000) {
				$('.plane').addClass('moveCenter');

			}
			if (scrollTop <= 2500) {
				$('.plane').addClass('moveRight');
				
			}
			/*=========================3============================*/
			if (scrollTop <= 700*5) {
				$('.logoContainer').addClass('logoContainerCenter');
			}
			if (scrollTop >= 700*5+1) {
				$('.logoContainer').removeClass('logoContainerCenter');
			}
			
			$('.cloud_chain_sm').css('top', (+40+bgpos*2));
			$('.cloud_chain_md').css('top', (-100+bgpos*2.5));
			$('.cloud_chain_lg').css('top', (-150+bgpos*3));
			$('.cloud_chain_xl').css('top', (-150+bgpos*3.5));
			
			/*=========================2============================*/
			if (scrollTop >= (700*5+300)) {
				$('.phone').addClass('centerPhone');
				$('.computer').addClass('centerComp');
			}
			if (scrollTop >= (700*6+300) || scrollTop <= (700*5+300-1)) {
				$('.phone').removeClass('centerPhone');
				$('.computer').removeClass('centerComp');
			}
			
			/*=========================1============================*/
			
			
			
			/* timer delay code for 5 seconds */
			
			
			
			
			
						
			
			
		});	

	    
	});
	
	
	
	$(window).resize(function(){
		var windowSize = $(window).height();
		var windowWidth = $(window).width();
		var sectionHeight = $("#section").height();
		console.log(windowSize);
		$('.nativeLogoHeader').css('height', windowSize);
		$('.nativeLogoHeader img').css('margin-top', windowSize/2.7);
	});
	
	
	
	$('.spaceBackground').click(function(){
		//alert(windowSize + " " + windowWidth + " " + sectionHeight)
		
	});

});





//
// scroll js
//

x = 0;  //horizontal coord
y = document.height; //vertical coord
window.scroll(x,y);


var pane = $('#pane'),
box = $('#box'),
wh = pane.width() - box.width(),
wv = pane.height() - box.height(),
d = {},
x = 10



function newh(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wh ? wh : n;
}

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wv ? wv : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        left: function(i,v) { return newh(v, 37, 39); },
        bottom: function(i,v) { return newv(v, 0, 0); } //disabled down key 0 = 40
    });
    wh = pane.width() - box.width();
    wv = pane.height() - box.height();
    
    
    
    //find and print rocket position
    /*
    var rocket = $('#box');
    var offset = rocket.offset();
    var top = offset.top;
    
    var rocketBottomPos = -($(window).height() - top - $('#box').height());
    console.log('rocket bottom position = '+rocketBottomPos);
    
    var win = $(window);
    var scrollTop = win.scrollTop();
    if (scrollTop > -rocketBottomPos && scrollTop < -rocketBottomPos+500) {
    	$("html, body").animate({ scrollTop: 1000 }, 0);
    }
    */
}, 20);


var spacehit = 0;
$(document).keydown(function(evt) {
	
	
	if (evt.keyCode == 41) {
		$('#box').css('bottom', prevMargin+8700);
		$("html, body").animate({ scrollTop: 700 }, 6000);
		
	}
});
var prevMargin = parseInt($("#box").css("margin-bottom"))*1
$(document).keyup(function(evt) {
	
	if (evt.keyCode == 38 && (spacehit < 1)) {
		
		$('#box').css('margin-bottom', 100+prevMargin);
		
		$("html, body").animate({ scrollTop: 700*6-prevMargin }, 1000);
		$(".scrollup").fadeOut();
		spacehit = 0;
		prevMargin = prevMargin + 700
		
		console.log(prevMargin);
	}
});

$(document).keyup(function(evt) {
	
	if (evt.keyCode == 32 && (spacehit < 1)) {
		
		$('#box').css('margin-bottom', 700);
		
		$("html, body").animate({ scrollTop: 700*6 }, 6000);
		$(".scrollup").fadeOut();
		spacehit = 1;
		
		console.log(prevMargin);
	}
});


$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 700*6 }, 6000);
		$(".scrollup").fadeOut();
		$('#box').css('margin-bottom', 700*6);
});

$(document).keydown(function(e){
    if (e.keyCode == 39) { 
		$("#box").css('background', 'url(images/rocketship-right.png)');
    }
	else if (e.keyCode == 37) { 
 		$("#box").css('background', 'url(images/rocketship-left.png)');
    }
	
});
$(document).keyup(function(p){
    if (e.keyCode == 39) { 
		$("#box").css('background', 'url(images/rocketship.png)');
    }
	else if (e.keyCode == 37) { 
 		$("#box").css('background', 'url(images/rocketship.png)');
    }
});