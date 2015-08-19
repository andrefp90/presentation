var startingItem = 3;

$(document).ready(function() {
	$('.data .item').each(function(){	
		$('#carousel').append( $(this).find('.image').html() );
	});
	createCarousel();
    showCaption();
 });



function createCarousel(){
    
	$('div#carousel').roundabout({
		startingChild: window.startingItem,
		childSelector: 'img',
		tilt: -4.5,
		minOpacity:1,
		minScale: .45,
		duration: 1200,
		clickToFocus: true,
		clickToFocusCallback: showCaption
	});
createCustomButtons();
}


function createCustomButtons(){
    
$('.nextItem').click(function(){
    hideCaption();
      $('div#carousel').roundabout('animateToNextChild', showCaption);             
});
    $('.prevItem').click(function(){
        hideCaption();
        $('div#carousel').roundabout('animateToPreviousChild', showCaption);
    });
    $('div#carousel img').click(function(){
        hideCaption();
    
    });
}

function showCaption(){

var childInFocus = $('div#carousel').data('roundabout').childInFocus;
var setCaption = $('.data .item .caption:eq('+childInFocus+')').html();
    $('#text').html(setCaption);
    var newHeight =$('#text').height()+'px';
    $('.information').animate({'height':newHeight},500,function(){
        $('#text').animate({'opacity':1},250);
    });
}

function hideCaption(){
$('#text').animate({'opacity':0},250);
}