
jQuery(document).ready(function($) {
	 var playButton = $(".js-videoLinkButton");
            playButton.hover(function() {
                $(this).addClass("is-flipped");
            }, function() {
                $(this).removeClass("is-flipped");
            });
});