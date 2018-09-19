$(function(){
	'use strict'

	
	
	
	



// effect class active  in links  
$('.links li').click(function(){

$(this).addClass('active').siblings().removeClass('active');
	
    });
	
$(window).scroll(function(){

var windowScroll =$(this).scrollTop();
/*
test
console.log(windowScroll );
*/


//start effects  in header  
$('.header .logo-center ').css({
'transform':'translate(0px,'+windowScroll/6+'%)'

});
	
$('.header .left-boy ').css({
'transform':'translate(0px,-'+windowScroll/30/30+'%)'

});

	
//woow stuff animate
function effectShanck(){
var randNum =Math.floor((Math.random() * 4) + 0);

	$('.item-lamb div').eq(randNum).addClass('show-shake').siblings().removeClass('show-shake');
}
function fadeEffect(){

  $('.downline').addClass('show-left');
  
    $('.upline').addClass('show-left');

}	

if(windowScroll>$('.first-section').offset().top-2500)
  
  {
	
	 
  
  setInterval(function(){effectShanck()},6000);
	
   fadeEffect();	  
 
  
}	

	//end  effect  in first section
	
	
	
//landing element  
	
	
if(windowScroll > $('.second-section').offset().top - ($(window).height() / 2.2)) {

    $('.second-section .item-content div').each(function(i){

      setTimeout(function(){
        $('.second-section .item-content div').eq(i).addClass('is-showing');
      }, 150*(i+1));
    });

  }
	
//floating elemnt  left and right 
	
	
	  if(windowScroll > $('.item-section-four').offset().top - $(window).height()){

    var offset = (Math.min(0, windowScroll - $('.item-section-four').offset().top +$(window).height() - 450)).toFixed();

    $('.four-section  .item-section-four .item1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.four-section  .item-section-four .item3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
	
	
	
	

	
	
	});

});

	
