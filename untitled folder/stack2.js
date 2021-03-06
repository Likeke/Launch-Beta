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
        bottom: function(i,v) { return newv(v, 0, 38); } //disabled down key 0 = 40
    });
    wh = pane.width() - box.width();
    wv = pane.height() - box.height();
}, 20);


// CHANGES IMAGE TO RIGHT AND LEFT
// This is what is causing the flickering -- need a different solution, maybe?
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
