
// FROM ORIGINAL OUTERSPACE's STACK.js
// MOVE ROCKET LEFT AND RIGHT with ARROW KEYS
// http://stackoverflow.com/questions/4950575/how-to-move-a-div-with-arrow-keys


x = 0;  //horizontal coord
y = document.height; //vertical coord
window.scroll(x,y);


var pane = $('#pane'),
box = $('#box'),
wh = pane.width() - box.width(),
wv = pane.height() - box.height(),
d = {},
x = 5;

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
        top: function(i,v) { return newv(v, 38, 40); } //disabled down key=40, up key=38.  
    });
    wh = pane.width() - box.width();
    wv = pane.height() - box.height();
}, 10); // this number changes the speed
//
//

/*
// CLICK LAUNCH BUTTON -- SCROLL TO TOP CONTINUOUSLY
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 20000); // ms to top
    $(".hide").css('visibility','visible');
	$(".scrollup").fadeOut();

});
*/

$('.scrollup').click(function() { 

var trans = $('#box').animate({ "bottom": "+=250px" }, 10000 );
setTimeout(function() { // timeout ... delays these functions
    $("html, body").animate({ scrollTop: 0 }, 20000);
    $(".hide").css('visibility','visible');
    $(".idea").fadeOut(800);
}, 4000);

});



// CHANGES IMAGE TO RIGHT AND LEFT
// This is what is causing the flickering -- need a different solution, maybe?
// The flickering goes away if you change the image to a color (e.g., change
// the background from red to blue instead of changing a background image.)
// CSS Transform: rotate!  instead of change background image.  

/*
$(document).keydown(function(e){
    if (e.keyCode == 39) { 
		$("#box").css('background', 'url(images/rocketship-right.png)');
    }
	else if (e.keyCode == 37) { 
 		$("#box").css('background', 'url(images/rocketship-left.png)');
    }	
});
$(document).keyup(function(p){
    if (p.keyCode == 39 || p.keyCode == 37) { 
		$("#box").css('background', 'url(images/rocketship.png)');
    }
});
*/

// There is still a bug: if you are holding right and then press the left key,
// the rocket goes back to the rocketship.png file. 

$(document).keydown(function(e){
    if (e.keyCode == 39) { 
        $("#box").css('-webkit-transform', 'rotate(15deg)');
    }
    else if (e.keyCode == 37) { 
        $("#box").css('-webkit-transform', 'rotate(-15deg)');
    }   
});
$(document).keyup(function(p){
    if (p.keyCode == 39 || p.keyCode == 37) { 
        $("#box").css('transform', '');
    }
});

