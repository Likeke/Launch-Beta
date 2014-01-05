
$(function(){
	scrollTop:

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

	function createMovingClouds(){
		$(".section4").append("<img src='images/cloud_chain_sm.png' class='moving_cloud_chain_sm' />");
		setTimeout(function(){
			$('.moving_cloud_chain_sm').addClass('moveCloudsLeft');
		}, 100);
	}
	

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
				var slowScrollPos = 0.05 * scrollTop; //changing value that moves at 5% the speed of the mouse scroll
				var headersize = $('.nativeLogoHeader').height();

				console.log('scroll top position = ' + scrollTop);//current scroll position of the top of the viewport in the document 

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
					$(".section4").append("<img>");
				}
				if (scrollTop <= 2500) {
					$('.plane').addClass('moveRight');
					
				}
				
				//
				//	Create moving clouds from right to left
				//
				var moveCloudFlag = 0;
				var rand = 300; // initial rand time
				
				if (scrollTop<=3700) {
					moveCloudFlag = 1;
				}
				if (scrollTop<=2000) {
					moveCloudFlag = 0;
				}
								
				
				
				
				
				
				/*=========================3============================*/
				if (scrollTop <= 700*5) {
					$('.logoContainer').addClass('logoContainerCenter');
				}
				if (scrollTop >= 700*5+1) {
					$('.logoContainer').removeClass('logoContainerCenter');
				}
				//$('.cloud_chain_sm').css('margin-top', (x+slowScrollPos*2));
				$('.cloud_chain_sm').css('margin-top', (-480+slowScrollPos*2));
				$('.cloud_chain_md').css('margin-top', (-490+slowScrollPos*2.5));
				$('.cloud_chain_lg').css('margin-top', (-480+slowScrollPos*3));
				$('.cloud_chain_xl').css('margin-top', (-600+slowScrollPos*3.5));
			
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
			
			
			
			
			
			
			
			
						
			
			
			});
			
			if (moveCloudFlag == 1) {
				

				setInterval(function(){

					 createMovingClouds();
					 rand = Math.round(Math.random()*(8000-2000))+2000; // generate new time (between 3sec and 500"s)

				}, rand); 
			
			}

		
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
}, 200);