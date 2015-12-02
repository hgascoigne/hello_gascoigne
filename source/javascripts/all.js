//= require "jquery"
//= require "skrollr"
//= require_tree .

$(document).ready(function() {
	console.log('Hello :)');
	$.parallaxify({
        mouseMotionType: 'natural'
    });

	//Show/Hide overlay
    $('.open-overlay').click(function(event) {
    	event.preventDefault();
    	var overlayTarget = $(this).data('overlay');
    	$(overlayTarget).addClass('open');
    });

    $('.close-overlay').click(function(event) {
    	// event.preventDefault();
    	var overlayTarget = $(this).data('overlay');
    	$(overlayTarget).removeClass('open');
    });
});