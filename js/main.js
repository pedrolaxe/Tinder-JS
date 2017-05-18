/**
 * Tinder initialization
 */
$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
        //$('#status').html('Dislike image ' + (item.index()+1));
				$('#status').html('Faz isso n&atilde;o, gostamos tanto da Julia!');
    },
	// like callback
    onLike: function (item) {
	    // set the status text
        //$('#status').html('Like image ' + (item.index()+1));
				$('#status').html('Isso Mesmo! Julia é a melhor m&atilde;e de todas!');
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger Tinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});
$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['app', 'texto'],
				scrollingSpeed: 1000,
				navigation: true
			});
		});
